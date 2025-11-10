'use client'

import { BsSpotify } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "@/service/spotifyMagaluCalls";
import Loading from "@/components/layout/Loading";
import toast from "react-hot-toast";

export default function Login() {


  const {
    mutate: startLogin,
    data,
    isPending,
    isError,
    error
  } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (res) => {
      if (res?.authUrl) {
        toast.success( res.message,{position: 'top-center'})
        console.log('Res ---> ', res)
        window.open(res.authUrl);
      }
    },
    onError:(err)=>{
      console.error(err.message);
      toast.error(error?.message as string, {
        position: 'top-center'
      })
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center font-rubik font-bold bg-background relative">

      {isPending && (
      <Loading/>
      )}

      <div className="flex flex-col gap-5 justify-center items-center text-white z-10">
        <div className="flex flex-row gap-2 items-center justify-center">
          <BsSpotify size={50} />
          <p className="text-5xl">Spotify</p>
        </div>

        <label className="text-center text-gray-300">
          Entre com sua conta Spotify clicando no botão abaixo
        </label>

        <button
          onClick={() => startLogin()}
          disabled={isPending}
          className={`primary-button px-6 py-2 rounded-md font-semibold transition ${
            isPending ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isPending ? "Conectando..." : "Entrar"}
        </button>

        {isError && (
          <p className="text-red-400 text-sm mt-2">
            Erro ao iniciar login. Tente novamente.
          </p>
        )}
      </div>
    </div>
  );
}
