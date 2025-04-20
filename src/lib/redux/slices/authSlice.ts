import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  user: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      state.user = action.payload
      // Storing in localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', action.payload)
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
      }
    },
    checkAuth: (state) => {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          state.isAuthenticated = true
          state.user = storedUser
        }
      }
    },
  },
})

export const { login, logout, checkAuth } = authSlice.actions
export default authSlice.reducer