import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from '@mui/material'
import { IGenre, useFetchGenres } from '../../hooks/useFetchGenre'
import { cropImageUrl } from '../../services/image-resize'
import SideBarSkeleton from './SideBarSkeleton'

interface IProps {
  setSelectedGenre: (genres: IGenre | null) => void
  selectedGenre: IGenre | null
}

const Sidebar = ({ setSelectedGenre, selectedGenre }: IProps) => {
  const { data: genres, isLoading, error } = useFetchGenres()
  if (error) return <div>Error: {error}</div>
  return (
    <div>
      <>
        <Typography variant='h6' sx={{mb:2}}>Genres</Typography>
        {isLoading &&
          Array(20)
            .fill(null)
            .map((_, index) => <SideBarSkeleton key={index} />)}
        {genres &&
          genres.length > 0 &&
          genres.map(genre => (
            <List
              key={genre.id}
              dense
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                padding: 0,
                margin: 0,
              }}
            >
              <ListItem sx={{ paddingInline: 0, paddingBlock: '5px' }}>
                <ListItemButton
                  onClick={() => setSelectedGenre(genre)}
                  sx={{
                    opacity: `${selectedGenre?.name == genre.name ? 1 : 0.9}`,

                    textAlign: 'left',
                    textTransform: 'capitalize',
                    padding: 0,
                    margin: 0,
                    fontWeight:
                      selectedGenre?.name == genre.name ? 'bold' : 'normal',
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={genre.name}
                      src={cropImageUrl(genre.image_background)}
                      sx={{ objectFit: 'cover' }}
                    />
                  </ListItemAvatar>
                  {genre.name}
                </ListItemButton>
              </ListItem>
            </List>
          ))}
      </>
    </div>
  )
}
export default Sidebar
