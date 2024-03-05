import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import { Box, Stack } from '@mui/material'


const RootLayout = () => {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  )
}
export default RootLayout
