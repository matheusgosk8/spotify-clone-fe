"use client";

import Link from "next/link";
import { useNavBar } from "@/providers/NavProvider";
import { FaHome, FaUserAlt, FaCompactDisc, FaPlay, FaUser } from "react-icons/fa";
import { BsDownload, BsSpotify } from "react-icons/bs";
import { RiAlbumLine } from "react-icons/ri";

export default function NavBar() {
  const { isOpen } = useNavBar();

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-black text-foreground shadow-lg transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
    >
      <nav className="flex flex-col justify-between items-center h-full p-4 pt-16">
        <div className="flex flex-col gap-6 text-3xl">
            <div className="flex flex-row items-center gap-2">
              <BsSpotify />
              <p className=" font-semibold">Spotify</p>
            </div>

          <div className="flex flex-col gap-6 text-xl">
            <Link href="/home" className="flex items-center gap-2 hover:text-primary">
              <FaHome /> Home
            </Link>
            <Link href="/artistas" className="flex items-center gap-2 hover:text-primary">
              <RiAlbumLine /> Artistas
            </Link>
            <Link href="/artists" className="flex items-center gap-2 hover:text-primary">
              <FaPlay /> Playlists
            </Link>
            <Link href="/artists" className="flex items-center gap-2 hover:text-primary">
              <FaUser /> Perfil
            </Link>
          
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 pb-4 cursor-pointer hover:opacity-75">
          <BsDownload size={24} />
          <p className="text-lg">Instalar app</p>
        </div>
      </nav>
    </aside>
  );
}
