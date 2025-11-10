import Image from 'next/image'
import {BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import { ArtistAlbum } from '@/types/spotifyTypes'
import AlbumItem from './AlbumItem'

type pageProps = {
    artistAlbums: ArtistAlbum[]
}

const ArtistAlbums = ({artistAlbums}: pageProps) => {


    return (
        <div className="">
            {artistAlbums.length === 0 ? (
                <p className="text-accent">Nenhum álbum encontrado para este artista.</p>
            ) : (
                <>

                    <div className="flex flex-col gap-6">
                        {artistAlbums.map((album, index) => (
                           <AlbumItem album={album} index={index}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ArtistAlbums