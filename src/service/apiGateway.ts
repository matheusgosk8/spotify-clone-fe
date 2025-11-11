import { store } from '@/store/store';
import axios from 'axios';
import { setAuth, clearAuth } from '@/slices/authSlice';

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    const updatedToken = response.headers['x-updated-token'] || response.data?.updatedToken;
    const userId = store.getState().auth.userId;

    if (updatedToken) {
      store.dispatch(setAuth({ token: updatedToken, userId }));
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 403) {
      store.dispatch(clearAuth());
    }
    return Promise.reject(error);
  }
);
