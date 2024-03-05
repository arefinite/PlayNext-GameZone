import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

interface IProps {
  setSortBy: (val: string) => void
}

export default function SortGame({ setSortBy }: IProps) {
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Rating' },
  ]

  return (
    <Box sx={{ pb: 4 }}>
      <FormControl sx={{ width: { xs: '100%', md: '200px' } }}>
        <InputLabel id='demo-simple-select-label'>Sort by</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Sort by'
        >
          {sortOptions.map(option => (
            <MenuItem
              onClick={() => setSortBy(option.value)}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
