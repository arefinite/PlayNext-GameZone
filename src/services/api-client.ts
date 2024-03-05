import axios from "axios"

const baseURL = import.meta.env.VITE_API_BASE_URL

export const apiClient = axios.create({
  baseURL,
  params: {
    key: import.meta.env.VITE_API_KEY
  }

}) 