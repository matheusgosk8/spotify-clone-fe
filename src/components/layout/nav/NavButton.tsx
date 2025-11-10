"use client";

import { useNavBar } from "@/providers/NavProvider";
import { FaBars } from "react-icons/fa";

export default function NavbarToggle() {
  const { toggleSidebar } = useNavBar();

  return (
    <>
      {/* Botão visível e clicável */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-secondary-lighter p-2 rounded-md hover:bg-secondary transition cursor-pointer hover:opacity-85"
      >
        <FaBars className="text-foreground w-5 h-5" />
      </button>
    </>
  );
}
