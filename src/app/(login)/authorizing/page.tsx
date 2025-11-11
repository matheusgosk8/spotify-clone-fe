'use client'

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { BsExclamationCircle } from "react-icons/bs"

import { handleAuth } from "@/service/spotifyMagaluCalls"
import { setProfile } from "@/slices/profileSlice"
import { setAuth } from "@/slices/authSlice"
import { SpotifyProfile } from "@/types/spotifyTypes"
import type { RootState } from "@/store/store"

export type AuthResponse = {
  profile: SpotifyProfile
  token: string
  message: string
}

const AuthorizePage = () => {
  const params = useSearchParams()
  const code = params.get("code")
  const router = useRouter()
  const dispatch = useDispatch()

  const { token } = useSelector((state: RootState) => state.auth)

  // Se já estiver autenticado, não faz a requisição
  const { data, isLoading, isError } = useQuery<AuthResponse>({
    queryFn: () => handleAuth(code!),
    queryKey: ['auth', code],
    enabled: !!code && !token, // só chama se tiver code e não tiver token
    staleTime: 0,
    refetchOnWindowFocus: false,
  })

  // Faz o dispatch e redirecionamento quando tiver data
  useEffect(() => {
    if (data) {
      dispatch(setProfile(data.profile))
      dispatch(setAuth({
        token: data.token,
        userId: data.profile.id
      }))

      // Redireciona após login bem-sucedido
      router.push('/home')
    }
  }, [data, dispatch, router])

  // Se já estiver logado e recarregar a página
  useEffect(() => {
    if (token) {
      router.replace('/home')
    }
  }, [token, router])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full text-white">
      {isLoading && (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold">
            Autenticando na aplicação
            <span className="inline-block ml-2 animate-dots"></span>
          </h1>
        </div>
      )}

      {isError && (
        <div className="flex flex-col justify-center items-center gap-5 text-3xl">
          <BsExclamationCircle size={50} />
          <h1>Erro, por favor tente novamente!</h1>
          <button className="primary-button">
            <Link href="/">Voltar</Link>
          </button>
        </div>
      )}

      {data && (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold">
            Redirecionando
            <span className="inline-block ml-2 animate-dots"></span>
          </h1>
        </div>
      )}
    </div>
  )
}

export default AuthorizePage
