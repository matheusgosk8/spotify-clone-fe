'use client'

import { useNavBar } from '@/providers/NavProvider'
import { useParams } from 'next/navigation'
import { artistsAlbumsStub } from '@/mocks/spotifyMocks'
import ArtistAlbums from '@/components/Artist/AlbumsList'
import ArtistHeader from '@/components/Artist/ArtistHeader'

export default function ArtistPage() {
    const { isOpen } = useNavBar()

    const params = useParams()
    const artistId = params?.artistid

    const artistAlbums = artistsAlbumsStub.filter(album =>
        album.artists.some(artist => artist.id === artistId)
    )

    return (
        <div
            className={`
        relative min-h-screen  bg-background text-foreground transition-all duration-300 ease-in-out pt-15 px-6
        ${isOpen ? 'md:ml-64' : 'md:ml-0'}
      `}
        >
            <ArtistHeader artistsAlbum={artistAlbums[0]} />
            <ArtistAlbums artistAlbums={artistAlbums} />

        </div>
    )
}
