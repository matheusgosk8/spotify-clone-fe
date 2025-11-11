import { useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUserPlaylists } from "@/service/spotifyMagaluCalls";
import PlaylistItem from "./PlaylistItem";

export default function PlaylistsList() {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["user-playlists-page"],
    queryFn: ({ pageParam = 0 }) =>
      getUserPlaylists({ limit: 10, offset: pageParam }),
    getNextPageParam: (lastPage) => {
      const { items, total, offset, limit } = lastPage.userPlaylists;
      return offset + limit < total ? offset + limit : undefined;
    },
    initialPageParam: 0,
    refetchOnWindowFocus: false,
  });

  const playlists = data?.pages.flatMap(page => page.userPlaylists.items) || [];

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loaderRef, fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <section className="min-h-screen flex flex-col justify-start items-start h-full w-full bg-background text-foreground p-6 space-y-10 overflow-x-hidden">
      {playlists.length === 0 && !isFetching && (
        <p className="text-accent">Nenhuma playlist encontrada.</p>
      )}

      {playlists.map((item, index) => (
        <PlaylistItem playlist={item} key={item.id || index} index={index} />
      ))}

      <div ref={loaderRef} className="flex justify-center w-full py-6">
        {isFetchingNextPage && (
          <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>
    </section>
  );
}
