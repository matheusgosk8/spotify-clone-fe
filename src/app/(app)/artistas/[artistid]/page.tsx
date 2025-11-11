'use client'

import { useEffect, useRef, useState } from 'react'
import { useNavBar } from '@/providers/NavProvider'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getArtistAlbums } from '@/service/spotifyMagaluCalls'
import { GetArtistsAlbumsResponse } from '@/types/spotifyTypes'
import ArtistHeader from '@/components/Artist/ArtistHeader'
import ArtistAlbums from '@/components/Artist/AlbumsList'
import { FaSpinner } from 'react-icons/fa'

export default function ArtistPage() {
    const { isOpen } = useNavBar()
    const params = useParams()
    const artistId = params?.artistid as string

    const limit = 10
    const [offset, setOffset] = useState(0)
    const [albums, setAlbums] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)
    const loaderRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError, isLoading } = useQuery<GetArtistsAlbumsResponse>({
        queryFn: () => getArtistAlbums({ limit, offset }, artistId),
        queryKey: ['artist-albums', artistId, offset],
        enabled: !!artistId && hasMore, // ✅ só busca se ainda tiver mais
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (data?.artistAlbums?.items) {
            setAlbums(prev => {
                const newItems = data.artistAlbums.items.filter(
                    (item) => !prev.some((existing) => existing.id === item.id)
                )
                return [...prev, ...newItems]
            })

            const total = data.artistAlbums.total ?? 0
            const newTotal = (data.artistAlbums.offset ?? 0) + data.artistAlbums.items.length
            if (newTotal >= total) setHasMore(false)
        }
    }, [data])

    useEffect(() => {
        if (!loaderRef.current || !hasMore) return

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isFetching && hasMore) {
                setOffset((prev) => prev + limit)
            }
        }, { threshold: 1.0 })

        observer.observe(loaderRef.current)
        return () => observer.disconnect()
    }, [albums, data, isFetching, hasMore])

    return (
        <div
            className={`relative min-h-screen bg-background text-foreground transition-all duration-300 ease-in-out pt-15 px-6
      ${isOpen ? 'md:ml-64' : 'md:ml-0'}
    `}
        >
            {albums.length > 0 && <ArtistHeader artistsAlbum={albums[0]} />}
            <ArtistAlbums artistAlbums={albums} />

            <div ref={loaderRef} className="flex justify-center items-center py-6">
                {isFetching && hasMore && (
                    <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>)}
            </div>

            {!hasMore && (
                <p className="text-sm text-center text-gray-500 py-4">
                    Não á mais álbuns para carregar
                </p>
            )}

            {isError && (
                <p className="text-red-500 text-center mt-4">
                    Não foi possível carregar os álbuns. Tente novamente mais tarde.
                </p>
            )}
        </div>
    )
}
