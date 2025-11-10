'use client';

import Link from "next/link";
import { useNavBar } from "@/providers/NavProvider";
import { BsDownload, BsSpotify } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { navRoutes } from "@/config/routes";

export default function NavBar() {
  const { isOpen } = useNavBar();
  const pathname = usePathname();


  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-black text-foreground shadow-lg transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64`}
    >
      <nav className="flex flex-col justify-between items-center h-full p-4 pt-16">
        <div className="flex flex-col gap-6 text-3xl">
          <div className="flex flex-row items-center gap-2">
            <BsSpotify />
            <p className="font-semibold">Spotify</p>
          </div>

          <div className="flex flex-col gap-6 text-xl w-full">
            {navRoutes.map((route) => (
              <Link
                key={route.link}
                href={route.link}
                className={`flex items-center gap-2 px-2 py-1 w-full transition-colors ${
                  pathname === route.link ? 'font-bold' : ''
                }`}
              >
                {route.icon} {route.label}
              </Link>
            ))}
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
