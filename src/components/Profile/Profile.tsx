'use client'

import { logOut } from '@/slices/profileSlice'
import {clearAuth} from '@/slices/authSlice'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'


export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.profile)

  const handleLogout = () => {
    dispatch(logOut())
    dispatch(clearAuth())
  }

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ')
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }

  const UserAvatar = () => {
    if (profile.images?.[0]?.url) {
      return (
        <img
          src={profile.images[0].url}
          alt={profile.display_name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-600 shadow-lg"
        />
      )
    }

    return (
      <div className="w-32 h-32 rounded-full bg-purple-600 flex items-center justify-center mb-4 shadow-lg">
        <span className="text-4xl font-bold text-white">
          {getInitials(profile.display_name || 'SP')}
        </span>
      </div>
    )
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <UserAvatar />

      <h1 className="text-2xl font-semibold mb-2">{profile.display_name}</h1>
      <p className="text-sm text-accent mb-6">{profile.email}</p>

      <button
        onClick={handleLogout}
        className="primary-button"
      >
        Sair
      </button>
    </div>
  )
}
