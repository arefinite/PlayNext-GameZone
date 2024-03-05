import Sidebar from '../components/home/Sidebar'
import { Grid, Container, Stack, Box } from '@mui/material'
import GameArea from '../components/home/GameArea'
import { IGenre } from '../hooks/useFetchGenre'
import { useState } from 'react'
import FilterPlatform from '../components/home/FilterPlatform'
import { IPlatform } from '../hooks/useFetchPlatforms'
import SortGame from '../components/home/SortGame'
import SearchBar from '../components/shared/SearchBar'
import GameHeading from '../components/home/GameHeading'

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  )
  const [sortBy, setSortBy] = useState('')
  const [searchText,setSearchText] = useState('')

  return (
    <Container maxWidth='xl' sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={0} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Sidebar
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Box sx={{flex:1}}>
              <SearchBar setSearchText = {setSearchText} />
            </Box>
            <Stack direction='row' spacing={2}>
              <Box sx={{ flex: 1 }}>
                <FilterPlatform setSelectedPlatform={setSelectedPlatform} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <SortGame setSortBy={setSortBy} />
              </Box>
            </Stack>
          </Stack>
          <GameHeading selectedGenre={selectedGenre}  selectedPlatform={selectedPlatform}/>
          <GameArea
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            sortBy={sortBy}
            searchText={searchText}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Home
