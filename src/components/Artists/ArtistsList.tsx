"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTopArtists } from "@/service/spotifyMagaluCalls";
import { GetTopArtistsResponse } from "@/types/spotifyTypes";

export default function TopArtists() {
  const [artists, setArtists] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const { data, isLoading, isFetching } = useQuery<GetTopArtistsResponse>({
    queryKey: ["artists-list", offset],
    queryFn: () => getTopArtists({ limit: 15, offset }),
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data?.userTopArtists?.items) {
      setArtists((prev) => [...prev, ...data.userTopArtists.items]);
      setTotal(data.userTopArtists.total);
    }
  }, [data]);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;


    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetching && artists.length < total) {
        setOffset((prev) => prev + 15);
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [artists.length, total, isFetching]);

  return (
    <section className="min-h-screen flex flex-col justify-start items-start h-full w-full bg-background text-foreground p-6 space-y-10 overflow-x-hidden">
      <div className="flex flex-col items-start gap-6 overflow-x-auto pb-3 w-full">
        {artists.map((artist, index) => (
          <Link
            href={`/artistas/${artist.id}`}
            key={index}
            className="flex flex-row hover:bg-gray-900 cursor-pointer transition-colors text-white gap-5 shrink-0 group items-center justify-start p-2 rounded-3xl"
          >
            <div className="w-15 h-15 rounded-full overflow-hidden">
              <Image
                src={artist.images?.[0]?.url ?? "/placeholder.png"}
                alt={artist.name}
                width={112}
                height={112}
                className="rounded-full w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <label className="font-light">{artist.name}</label>
          </Link>
        ))}

        <div ref={loaderRef} className="flex justify-center w-full py-6">
          {isFetching && (
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      </div>
    </section>
  );
}
