import { createUserPlaylist } from "@/service/spotifyMagaluCalls";
import { SpotifyPlaylistItem, SpotifyRawPlaylist } from "@/types/spotifyTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface CreatePlaylistParams {
  name: string;
  collaborative: boolean;
  publicPlaylist: boolean;
  description?: string;
}

export const useCreatePlaylist = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ name, collaborative, publicPlaylist, description }: CreatePlaylistParams) =>
      createUserPlaylist({ name, collaborative, public: publicPlaylist, description }),

    onMutate: async ({ name, description, collaborative, publicPlaylist }) => {
      await queryClient.cancelQueries({ queryKey: ["user-playlists-page"] });

      const previous = queryClient.getQueryData<any>(["user-playlists-page"]);

      if (previous) {
        const optimisticPlaylist: SpotifyRawPlaylist = {
          id: `temp-${Date.now()}`,
          name: name,
          description: description || "",
          collaborative: collaborative || false,
          public: publicPlaylist || false,
          images: [],
          href: "",
          tracks: { total: 0, href: "" },
          external_urls: { spotify: "" },
          primary_color: "",
          snapshot_id: "",
          type: "",
          uri: ""
        };

        queryClient.setQueryData(["user-playlists-page"], {
          ...previous,
          pages: previous.pages.map((page: any, index: number) =>
            index === 0
              ? {
                  ...page,
                  userPlaylists: {
                    ...page.userPlaylists,
                    items: [optimisticPlaylist, ...page.userPlaylists.items],
                    total: page.userPlaylists.total + 1
                  }
                }
              : page
          )
        });
      }

      return { previous };
    },

    onError: (context: any) => {
      if (context?.previous) {
        queryClient.setQueryData(["user-playlists-page"], context.previous);
      }
      toast.error("Erro ao criar playlist", { position: "top-center" });
    },

    onSuccess: () => {
      toast.success("Playlist criada com sucesso!", { position: "top-center" });
      queryClient.invalidateQueries({ queryKey: ["user-playlists-page"] });
    }
  });

  const handleCreatePlaylist = (
    name: string,
    description?: string,
    collaborative?: boolean,
    publicPlaylist?: boolean
  ) => {
    mutation.mutate({ name, description, collaborative: !!collaborative, publicPlaylist: !!publicPlaylist });
  };

  return { handleCreatePlaylist, isLoading: mutation.isPending };
};
