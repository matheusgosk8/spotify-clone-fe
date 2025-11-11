'use client'

import CreatePlaylistModal from '@/components/Playlists/CreatePlaylistModal'
import PlaylistsList from '@/components/Playlists/PlaylistsList'
import { useCreatePlaylist } from '@/hooks/useCreatePlaylist'
import { useNavBar } from '@/providers/NavProvider'
import { createUserPlaylist, getUserPlaylists } from '@/service/spotifyMagaluCalls'
import { SpotifyPlaylistItem } from '@/types/spotifyTypes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useLayoutEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BsPlus } from 'react-icons/bs'

type Props = {}

const Home = () => {

    const { isOpen } = useNavBar();
    const [modalOpen, setModalOpen] = useState(false);

    const {handleCreatePlaylist} = useCreatePlaylist();
    const onCreate = async (title: string, description?: string, collaborative?: boolean) => {
        try {
          const res = handleCreatePlaylist(title, description, collaborative);
          setModalOpen(false)
        } catch (err: any) {
          const msg = err?.message || 'Erro ao criar playlist';
          console.error(msg)
        }
      };

    return (
        <div className={`
            relative min-h-screen bg-background text-foreground transition-all duration-300 ease-in-out pt-10
            ${isOpen ? "md:ml-64" : "md:ml-0"}
          `}>
            <div className='flex flex-row justify-between gap-1 p-6'>
                <div>
                    <h2 className="text-2xl font-semibold">Minhas playlists</h2>
                    <p>Sua coleção pessoal de playlists</p>
                </div>
                <div>
                    <button className='hidden primary-button  sm:block w-fit' onClick={()=> setModalOpen(true)}>
                        <span className=''>Criar playlist</span>
                    </button>
                    <button className='sm:hidden w-16 h-16 text-white bg-transparent border border-secondary-lighter rounded-full p-2 flex justify-center items-center focus:opacity-85'>
                        <BsPlus size={30} />
                    </button>
                </div>
            </div>

            <PlaylistsList />

            {
                modalOpen && <CreatePlaylistModal fechar={()=> setModalOpen(false)} onCreate={onCreate}/>
            }

        </div>
    )
}

export default Home