"use client";

import { createContext, useState, useContext } from "react";

const NavBarContext = createContext<any>(null);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <NavBarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </NavBarContext.Provider>
  );
}

export const useNavBar = () => useContext(NavBarContext);
