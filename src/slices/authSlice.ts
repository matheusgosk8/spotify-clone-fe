
import { AuthState } from '@/types/internalTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: AuthState = {
  token: null,
  userId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthState>) {
      return { ...state, ...action.payload }
    },
    clearAuth() {
      return { ...initialState }
    },
  },
})

export const { setAuth, clearAuth } = authSlice.actions
export default authSlice.reducer
