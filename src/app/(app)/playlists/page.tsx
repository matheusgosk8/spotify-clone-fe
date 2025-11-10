'use client'

import PlaylistsList from '@/components/Playlists/PlaylistsList'
import { useNavBar } from '@/providers/NavProvider'
import { getUserPlaylists } from '@/service/spotifyMagaluCalls'
import { SpotifyPlaylistItem } from '@/types/spotifyTypes'
import { useEffect, useLayoutEffect, useState } from 'react'

type Props = {}

const Home = (props: Props) => {
    const { isOpen } = useNavBar();

    const [playlist, setPlaylist] = useState<SpotifyPlaylistItem[]>();
    const [loading, setLoading] = useState();

    const getPlaylist = async () => {
        const res = await getUserPlaylists();
        setPlaylist(res)
    }

    useLayoutEffect(() => {
        getPlaylist()
    }, [])


    return (
        <div className={`
      relative min-h-screen text-foreground transition-all duration-300 ease-in-out pt-10 pl-16
      ${isOpen ? "md:ml-64" : "md:ml-0"}`}
        >
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <h2 className="text-2xl font-semibold">Minhas playlists</h2>
                    <p>Sua coleção pessoal de playlists</p>
                </div>
                    <button className='primary-button'>
                        Criar playlist
                    </button>
            </div>
            

            <PlaylistsList playList={playlist} />

        </div>
    )
}

export default Home