import { useFetch } from "./useFetch"

export interface IGenre {
  id: number
  name: string
  image_background: string

}

export const useFetchGenres = () => useFetch<IGenre>('/genres')
