'use client'

import { clearArtist } from '@/slices/profileSlice'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'


export default function Profile() {
  const dispatch = useDispatch()
  const artist = useSelector((state: RootState) => state.artist)

  const handleLogout = () => {
    dispatch(clearArtist())
    // Aqui você pode redirecionar ou fazer algo adicional, se quiser
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      {artist.images?.[0]?.url && (
        <img
          src={artist.images[0].url}
          alt={artist.display_name}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      )}

      <h1 className="text-2xl font-semibold mb-2">{artist.display_name}</h1>
      <p className="text-sm text-accent mb-6">{artist.email}</p>

      <button
        onClick={handleLogout}
        className="primary-button"
      >
        Sair
      </button>
    </div>
  )
}
