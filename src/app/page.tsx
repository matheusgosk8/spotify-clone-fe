import Image from "next/image";
import Link from "next/link";
import { BsSpotify } from "react-icons/bs";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center font-rubik font-bold bg-background">

      <div className="flex flex-col gap-5 justify-center items-center text-white">
        <div className="flex flex-row gap-2 items-center justify-center ">
          <BsSpotify size={50}/>
          <p className="text-5xl">Spotify</p>
        </div>
        <label>
          Entre com sua conta Spotify clicando no botão abaixo
        </label>

        <div className="primary-button">
          <Link href={'/home'}> Entrar </Link>
        </div>
      </div>
      
    </div>
  );
}
