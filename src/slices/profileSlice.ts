import { SpotifyProfile } from '@/types/spotifyTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SpotifyProfile = {
  country: "BR",
  display_name: "mtsgosk8",
  email: "mtsgosk8@hotmail.com",
  followers: {
    href: null,
    total: 0,
  },
  href: "https://api.spotify.com/v1/users/mtsgosk8",
  id: "mtsgosk8",
  images: [
    {
      height: 300,
      url: "https://i.scdn.co/image/ab6775700000ee85ebd2403830dd9d984a56cf3a",
      width: 300,
    },
    {
      height: 64,
      url: "https://i.scdn.co/image/ab67757000003b82ebd2403830dd9d984a56cf3a",
      width: 64,
    },
  ],
  product: "premium",
};

const emptyProfile: SpotifyProfile = {
  country: "",
  display_name: "",
  email: "",
  followers: {
    href: null,
    total: 0,
  },
  href: "",
  id: "",
  images: [],
  product: "",
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtist(state, action: PayloadAction<SpotifyProfile>) {
      return { ...state, ...action.payload };
    },
    clearArtist() {
      return { ...emptyProfile };
      //return initialState
    },
  },
});

export const { setArtist, clearArtist } = artistSlice.actions;
export default artistSlice.reducer;
