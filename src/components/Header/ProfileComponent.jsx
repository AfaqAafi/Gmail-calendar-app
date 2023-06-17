
import { Box,} from '@mui/material';
import React from 'react'
import ProfilePopup from './ProfilePopup';

const ProfileComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          "&>img": {
            borderRadius: "50%",
            height: "32px",
            width: "32px",
            ml: 1,
          },
        }}
      >
        <img src="/assets/unnamed.png" alt="" />
      </Box>
      <ProfilePopup anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open} />
    </>
  );
};

export default ProfileComponent