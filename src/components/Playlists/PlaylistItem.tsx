import { ArtistAlbum, SpotifyPlaylistItem } from '@/types/spotifyTypes'
import Image from 'next/image'
import React from 'react'

type Props = {
    playlist: SpotifyPlaylistItem,
    index: number
}

const PlaylistItem = ({ playlist, index }: Props) => {
    return (
        <div
            key={index}
            className="rounded-xl h-24 p-4 transition-colors cursor-pointer flex flex-row gap-5 w-fit"
        >
            <div className="relative w-24 h-24 rounded-md overflow-hidden mb-3">
                {playlist.images?.[0]?.url ? (
                    <Image
                        src={playlist.images[0].url}
                        alt={playlist.name}
                        fill
                        className="object-cover rounded-md"
                        sizes="192px"
                    />
                ) : (
                    <div className="w-full h-full bg-accent flex items-center justify-center text-sm text-foreground/60">
                        Sem imagem
                    </div>
                )}
            </div>

            <div className='flex flex-col h-24 justify-center '>
                <h3 className="text-base  truncate">{playlist.name}</h3>
                <p className=" font-light text-gray-100 text-sm truncate">{playlist.description}</p>

            </div>
        </div>
    )
}

export default PlaylistItem