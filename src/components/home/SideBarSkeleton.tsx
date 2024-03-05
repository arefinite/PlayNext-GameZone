import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from '@mui/material'

const SideBarSkeleton = () => {
  return (
    <List sx={{ bgcolor: 'background.paper', margin: '0', padding: '0px' }}>
      <ListItem
        alignItems='center'
        sx={{ paddingInline: 0, paddingBlock: '5px' }}
      >
        <ListItemAvatar>
          <Skeleton variant='circular' width={40} height={40} />
        </ListItemAvatar>
        <ListItemText>
          <Skeleton width='50%' />
        </ListItemText>
      </ListItem>
    </List>
  )
}
export default SideBarSkeleton
