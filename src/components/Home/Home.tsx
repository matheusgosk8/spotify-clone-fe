'use client'

import { Section } from './HomeCards'
import {  useQuery, useQueryClient } from '@tanstack/react-query'
import { getArtistAlbums, getTopArtists, getUserPlaylists } from '@/service/spotifyMagaluCalls'
import HomeCardSkeleton from './HomeCardSkeleton'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { FaHandPointRight } from 'react-icons/fa'
import { GetArtistsAlbumsResponse, GetTopArtistsResponse, GetUserPlaylistsResponse } from '@/types/spotifyTypes'


export default function HomePage() {

  const queryClient = useQueryClient()
  const profile = useSelector((state: RootState) => state.profile)

  const { data: artistsResponse, isLoading: isArtistsLoading, isError: isArtistsError } = useQuery<GetTopArtistsResponse>({
    queryFn: () => getTopArtists({ limit: 8, offset: 0 }),
    queryKey: ["home-topArtists"],
    staleTime: Infinity,
    refetchInterval: false,
    refetchOnWindowFocus: false
  })


  const topArtists = artistsResponse?.userTopArtists.items || []
  const firstArtistId = topArtists[0]?.id

  const {
    data: albumsResponse,
    isLoading: isAlbumsLoading,
    isError: isAlbumsError,
  } = useQuery<GetArtistsAlbumsResponse>({
    queryFn: () => getArtistAlbums({ limit: 8, offset: 0 }, firstArtistId),
    queryKey: ["home-artistAlbums", firstArtistId],
    staleTime: Infinity,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    enabled: !!firstArtistId,
  })

  const topAlbums = albumsResponse?.artistAlbums?.items || []

  const {
    data: userPlaylistsResponse,
    isLoading: isUserPlaylistsLoading,
    isError: isUserPlaylistsError

  } = useQuery<GetUserPlaylistsResponse>({
    queryFn: () => getUserPlaylists({ limit: 8, offset: 0 }),
    queryKey: ["home-userPlaylists"],
    staleTime: Infinity,
    refetchInterval: false,
    refetchOnWindowFocus: false
  })

  const playlists = userPlaylistsResponse?.userPlaylists?.items || []
  const handldeRetry = (queryStr: string) => {
    queryClient.invalidateQueries({ queryKey: [queryStr] })
    queryClient.fetchQuery({ queryKey: [queryStr] })
  }

  return (
    <main className="min-h-screen  bg-background text-foreground p-6 space-y-10 overflow-x-hidden">
      <section>
        <h1 className="text-3xl font-bold mb-4">Bem-vindo(a) de volta 👋 {profile.display_name} </h1>
        <p className="text-accent text-sm">Veja seus artistas, álbuns e playlists favoritas</p>
      </section>

      {isArtistsLoading ?
        <HomeCardSkeleton /> : topArtists?.length ? (
          <Section
            title="Artistas mais ouvidos"
            items={topArtists.map((artist) => ({
              id: artist.id,
              name: artist.name,
              image: artist.images?.[0]?.url,
              subtitle: artist.genres.slice(0, 2).join(', '),
            }))}
          />
        ) : null}

      {isArtistsError &&
        <div className="text-red-500 text-sm flex flex-row items-center">
          Não foi possível carregar seus artistas.
          <button
            className={`underline flex flex-row gap-2 ml-2 cursor-pointer hover:text-red-400 ${isArtistsLoading ? 'pointer-events-none opacity-70' : ''}`}
            onClick={() => handldeRetry("home-topAlbums")}
          >
            <FaHandPointRight color='white' />  Tentar novamente
          </button>
        </div>
      }

      {isAlbumsLoading ?
        <HomeCardSkeleton /> : topAlbums?.length ? (
          <Section
            title="Top 5 álbuns"
            items={topAlbums.map(album => ({
              id: album.id,
              name: album.name,
              image: album.images?.[0]?.url,
              subtitle: album.artists?.[0]?.name,
            }))}
          />
        ) : null}

      {isAlbumsError &&
        <div className="text-red-500 text-sm flex flex-row items-center">
          Não foi possível carregar seus artistas.
          <button
            className={`underline flex flex-row gap-2 ml-2 cursor-pointer hover:text-red-400 ${isAlbumsLoading ? 'pointer-events-none opacity-70' : ''}`}
            onClick={() => handldeRetry("home-topArtists")}
          >
            <FaHandPointRight color='white' />  Tentar novamente
          </button>
        </div>
      }

      {isUserPlaylistsLoading ?
        <HomeCardSkeleton /> : playlists?.length ? (
          <Section
            title="Suas playlists"
            items={playlists.map(album => ({
              id: album.id,
              name: album.name,
              image: album.images?.[0]?.url,
              subtitle: album.description,
            }))}
          />
        ) : null}

      {isUserPlaylistsError &&
        <div className="text-red-500 text-sm flex flex-row items-center">
          Não foi possível carregar seus artistas.
          <button
            className={`underline flex flex-row gap-2 ml-2 cursor-pointer hover:text-red-400 ${isUserPlaylistsLoading ? 'pointer-events-none opacity-70' : ''}`}
            onClick={() => handldeRetry("home-userPlaylists")}
          >
            <FaHandPointRight color='white' />  Tentar novamente
          </button>
        </div>
      }

    </main>
  )
}



