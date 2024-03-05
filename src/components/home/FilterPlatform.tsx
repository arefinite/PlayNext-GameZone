import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IPlatform, useFetchPlatforms } from '../../hooks/useFetchPlatforms';

interface IProps {
  setSelectedPlatform : (val: IPlatform | null)=> void
}

export default function FilterPlatform({setSelectedPlatform}:IProps) {
  const { data: platforms, error } = useFetchPlatforms();
  
  if(error) return null


  return (
    <Box sx={{ pb: 4 }}>
      <FormControl sx={{ width: {xs: "100%", md: '200px'} }}>
        <InputLabel id='demo-simple-select-label'>Select Platform</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Select Platform'

        >
          {platforms &&
            platforms.map(platform => (
              <MenuItem onClick={()=>setSelectedPlatform(platform)} key={platform.id} value={platform.name}>
                {platform.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
