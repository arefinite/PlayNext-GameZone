import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";


interface IProps{
  setSearchText : (text: string) => void
}

const SearchBar = ({setSearchText}: IProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchText(searchRef.current!.value)
    searchRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        inputRef={searchRef}
        sx={{ width: '100%' }}
        id='outlined-basic'
        label='Search Game'
        placeholder="Type to search game..."
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button type="submit" variant="contained">
                Search
              </Button>
            </InputAdornment>
          )
        }}
      />
    </form>
  );
}

export default SearchBar;
