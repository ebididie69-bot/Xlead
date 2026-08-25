import axios from "axios";

// In production, frontend (Vercel) and backend (Railway) are on different
// domains, so requests need an absolute URL — set VITE_API_URL in Vercel's
// environment variables to your Railway backend URL (e.g.
// https://leadforge-backend.up.railway.app). Falls back to same-origin "/"
// for local dev, where Vite's proxy (vite.config.js) or a shared origin
// makes a relative path work fine.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/",
  withCredentials: true, // sends the signed session cookie set at OAuth callback
});

// Centralized 401 handling: bounce to login rather than every page
// having to check for it individually.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
