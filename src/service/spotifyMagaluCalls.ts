'use client'

import { userPlaylists } from "@/mocks/spotifyMocks"
import { SpotifyPlaylistItem } from "@/types/spotifyTypes"
import { authApi } from "./apiGateway"


export const getUserPlaylists = async(): Promise<SpotifyPlaylistItem[]>=>{
    return userPlaylists
}


export const handleLogin= async(): Promise<{message:string, authUrl: string} | null>=>{

    try {
        const {data} = await authApi.get('/api/v1/spotify-signin');
        console.log('Data --> ', data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }

}