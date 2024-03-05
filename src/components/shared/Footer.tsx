import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
const Footer = () => {
  return (
   <Container maxWidth="xl" sx={{pb:2 ,pt:4}}>
      <Typography variant="body1" sx={{textAlign:'right'}}>
        &copy; {new Date().getFullYear()} by Arefinite | All Rights Reserved.
     </Typography>
   </Container>
  )
}
export default Footer