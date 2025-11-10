import { userPlaylists } from "@/mocks/spotifyMocks"
import { SpotifyPlaylistItem } from "@/types/spotifyTypes"


export const getUserPlaylists = async(): Promise<SpotifyPlaylistItem[]>=>{
    return userPlaylists
}