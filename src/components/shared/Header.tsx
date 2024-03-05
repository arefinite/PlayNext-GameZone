import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import { AppBar, Typography, Container, Box, Switch } from '@mui/material'
import { useDarkMode } from '../../context/DarkModeContext'

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <AppBar position='static' color='primary'>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '5rem',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <SportsEsportsIcon sx={{ fontSize: '3rem' }} />
          <Typography variant='h4' fontWeight='bold'>
            PlayNext.
          </Typography>
        </Box>
        <Box>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </Box>
      </Container>
    </AppBar>
  )
}
export default Header
