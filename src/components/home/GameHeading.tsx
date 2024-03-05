import Typography from '@mui/material/Typography'
import { IGenre } from '../../hooks/useFetchGenre'
import { IPlatform } from '../../hooks/useFetchPlatforms'

interface IProps{
  selectedGenre: IGenre | null
  selectedPlatform: IPlatform | null
}

const GameHeading = ({ selectedGenre, selectedPlatform }: IProps) => {
  
  const heading = `${selectedGenre?.name ?? ''}  ${selectedPlatform?.name ?? ''}`
  return (
    <Typography variant='h5' component='h2' sx={{ mb: 4 }}>
     {heading} Games
    </Typography>
  )
}
export default GameHeading
