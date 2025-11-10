"use client";

import { useNavBar } from "@/providers/NavProvider";
import NavBar from "@/components/layout/nav/Nav";

export default function NavWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen } = useNavBar();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Esconde a sidebar no mobile, mas mantém o provider e layout vivos */}
      <div className="hidden md:block">
        <NavBar />
      </div>

      {/* Conteúdo principal */}
      <main
        className={`flex-1 bg-gray-950 text-white transition-all duration-300 ease-in-out ${
          isOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
