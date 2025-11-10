"use client";

import { useNavBar } from "@/providers/NavProvider";
import HomePage from "@/components/Home/Home";

export default function Home() {
  const { isOpen } = useNavBar();

  return (
    <div
      className={`
        relative min-h-screen w-full bg-background text-foreground transition-all duration-300 ease-in-out pt-10
        ${isOpen ? "md:ml-64" : "md:ml-0"}
      `}
    >
      <HomePage />
    </div>
  );
}
