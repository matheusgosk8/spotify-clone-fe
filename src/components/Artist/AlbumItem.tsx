import { ArtistAlbum } from '@/types/spotifyTypes'
import Image from 'next/image'
import React from 'react'

type Props = {
    album: ArtistAlbum,
    index: number
}

const AlbumItem = ({album, index}: Props) => {
  return (
    <div
    key={index}
    className="rounded-xl h-24 p-4 transition-colors cursor-pointer flex flex-row gap-5 w-fit"
>
    <div className="relative w-24 h-24 rounded-md overflow-hidden mb-3">
        {album.images?.[0]?.url ? (
            <Image
                src={album.images[0].url}
                alt={album.name}
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
        <h3 className="text-base font-semibold truncate">{album.name}</h3>
        <p className="text-sm text-accent">{album.release_date}</p>
        <p className="text-sm text-accent">{album.total_tracks} faixas</p>
    </div>
</div>
  )
}

export default AlbumItem