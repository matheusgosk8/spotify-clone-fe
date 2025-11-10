import { FaHome, FaPlay, FaUser } from "react-icons/fa";
import { RiAlbumLine } from "react-icons/ri";

export const navRoutes = [
  { link: "/home", label: "Home", icon: <FaHome /> },
  { link: "/artistas", label: "Artistas", icon: <RiAlbumLine /> },
  { link: "/playlists", label: "Playlists", icon: <FaPlay /> },
  { link: "/perfil", label: "Perfil", icon: <FaUser /> },
];
