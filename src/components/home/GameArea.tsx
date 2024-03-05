import { Grid } from '@mui/material'
import { useFetchGames } from '../../hooks/useFetchGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { IGenre } from '../../hooks/useFetchGenre'
import { IPlatform } from '../../hooks/useFetchPlatforms'

interface IProps {
  selectedGenre: IGenre | null
  selectedPlatform: IPlatform | null
  sortBy: string
  searchText: string
}

const GameArea = ({ selectedGenre, selectedPlatform, sortBy,searchText }: IProps) => {
  const {
    data: games,
    error,
    isLoading,
  } = useFetchGames(selectedGenre, selectedPlatform, sortBy,searchText)

  if (error) return <div>Error: {error}</div>

  return (
    <Grid container spacing={4}>
      {isLoading &&
        Array(9)
          .fill(null)
          .map((_, index) => <GameCardSkeleton key={index} />)}

      {games && games.length > 0 ? (
        games.map(game => <GameCard key={game.id} game={game} />)
      ) : (
        <Grid item>
          <p>No games available based on this filter. Please try again!</p>
        </Grid>
      )}
    </Grid>
  )
}
export default GameArea
