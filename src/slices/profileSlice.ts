import { SpotifyProfile } from '@/types/spotifyTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SpotifyProfile = {
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

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<SpotifyProfile>) {
      return { ...state, ...action.payload };
    },
    logOut() {
      return { ...initialState };
    },
  },
});

export const { setProfile, logOut } = profileSlice.actions;
export default profileSlice.reducer;
