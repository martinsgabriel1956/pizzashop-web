import axios from 'axios'
import { env } from 'process'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})
