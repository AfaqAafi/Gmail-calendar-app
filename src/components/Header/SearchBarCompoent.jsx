import { Search } from '@mui/icons-material';
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SearchBarCompoent = ({setSearchMeet }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Box onClick={() => setSearchMeet(false)}>
          <ArrowBackIcon sx={{ cursor: "pointer", color: "#5f6368", fontSize: '22px' }} />
        </Box>
        <Typography sx={{ fontSize: "19px", color: "#5f6368" }}>
          Search
        </Typography>
        <Box ml={5}>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              ".MuiInputBase-input": {
                padding: "12px 400px 12px 0px",
                border: "none",
                outline: "none",
              },
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
                outline: "none",
                background: "#f1f3f4",
                zIndex: -1,
              },
            }}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ zIndex: 1 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default SearchBarCompoent