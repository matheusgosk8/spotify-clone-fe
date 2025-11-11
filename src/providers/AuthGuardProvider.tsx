// src/providers/AuthGuard.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/store'

export default function AuthGuardProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (!token) {
      router.replace('/')
    }
  }, [token, router])

  if (!token) {
    return null 
  }

  return <>{children}</>
}
