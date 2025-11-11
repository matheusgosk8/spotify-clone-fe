'use client'

import { PaginationType } from "@/types/spotifyTypes"
import { api, authApi } from "./apiGateway"


export const handleLogin = async (): Promise<{ message: string, authUrl: string } | null> => {

    try {
        const { data } = await authApi.get('/api/v1/spotify-signin');
        console.log('Data --> ', data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }

}

export const handleAuth = async (code: string) => {
    try {
        const { data } = await authApi.get(`/api/v1/spotify-callback?code=${code}`);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getTopArtists = async (pagination: PaginationType) => {
    try {
        const { data } = await api.get('/api/v1/spotify/get-top-artists', {
            params: {
                limit: pagination.limit,
                offset: pagination.offset,
            },
        })

        return data
    } catch (error) {
        console.error(error)
        return null
    }
}


export const getArtistAlbums = async (pagination: PaginationType, artistId?: string) => {
    try {
        const { data } = await api.get(`/api/v1/spotify/get-artists-albums/${artistId}/albums`, {
            params: {
                limit: pagination.limit,
                offset: pagination.offset
            },
        })

        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getUserPlaylists = async (pagination: PaginationType) => {
    console.log('Paginatoopn --> ', pagination)
    try {
        const { data } = await api.get('/api/v1/user/playlists', {
            params: {
                limit: pagination.limit,
                offset: pagination.offset,
            },
        })
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export const createUserPlaylist = async (playlist: {
    name: string;
    collaborative: boolean;
    public: boolean;
    description?: string;
  }) => {
    if (!playlist.name) {
      throw new Error("O título da playlist é obrigatório");
    }

    try {
      const { data } = await api.post('/api/v1/user/create-playlist', playlist);
      return data; 
    } catch (error) {
      throw error; 
    }
  };
  
  export const getUserProfile = async() =>{
    try {
        const {data} = await api.get('/api/v1/user/profile');
        return data;
    } catch (error) {
          throw error; 
    }
  }