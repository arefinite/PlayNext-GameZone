import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
} from '@mui/material'

const GameCardSkeleton = () => {
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card sx={{ padding: 0 }}>
        <CardActionArea>
          <Skeleton variant='rectangular' height={220} width={400} />
          <CardContent>
            <Skeleton sx={{ mt: 2 }} height='35px' />
            <Skeleton width='60%' height='30px' />
            <Skeleton width='60%' height='30px' />
            
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default GameCardSkeleton
