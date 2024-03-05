import { useFetch } from './useFetch'
import { IGenre } from './useFetchGenre'
import { IPlatform } from './useFetchPlatforms'
interface Platform {
  id: number
  name: string
  slug: string
}

export interface IGame {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating: number
  released: string
}

export const useFetchGames = (
  selectedGenre: IGenre | null,
  selectedPlatform: IPlatform | null,
  sortBy: string,
  searchText:string
) =>
  useFetch<IGame>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: sortBy, search: searchText  } },
    [selectedGenre?.id, selectedPlatform?.id, sortBy,searchText]
  )
