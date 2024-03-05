import { useFetch } from "./useFetch"

export interface IPlatform {
  id: number
  name: string
  slug: string

}

export const useFetchPlatforms = () => useFetch<IPlatform>('/platforms/lists/parents')
