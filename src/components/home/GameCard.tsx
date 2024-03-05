import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Icon,
  Stack,
  Typography,
} from '@mui/material'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'

import StarIcon from '@mui/icons-material/Star'
import { IGame } from '../../hooks/useFetchGames'
import { IconType } from 'react-icons'
import { Fragment } from 'react/jsx-runtime'
import { cropImageUrl } from '../../services/image-resize'

interface IProps {
  game: IGame
}

const GameCard = ({ game }: IProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ padding: 0 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='220'
            image={cropImageUrl(game.background_image)}
            alt='green iguana'
            sx={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          <CardContent>
            <Stack
              sx={{ mt: 0 }}
              justifyContent='space-between'
              direction='row'
              alignItems='center'
            >
              <Box sx={{ color: 'gray' }}>
                {game.parent_platforms.map(({ platform }, index) => (
                  <Fragment key={platform.id}>
                    <Icon
                      component={iconMap[platform.slug]}
                      sx={{
                        mr: index !== game.parent_platforms.length - 1 ? 2 : 0,
                      }}
                    />
                  </Fragment>
                ))}
              </Box>
              <Box>
                <Chip
                  variant='outlined'
                  color={
                    game.rating > 4.5
                      ? 'success'
                      : game.rating > 3.5
                      ? 'warning'
                      : 'error'
                  }
                  icon={<StarIcon />}
                  label={game.rating ?? 'N/A'}
                />
              </Box>
            </Stack>
            <Typography
              gutterBottom
              variant='h5'
              fontWeight='bold'
              component='div'
              sx={{ letterSpacing: -1, mt: 2 }}
            >
              {game.name}
            </Typography>
            <Chip variant='outlined' label={`Released In : ${game.released}`} sx={{mt:1}} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default GameCard
