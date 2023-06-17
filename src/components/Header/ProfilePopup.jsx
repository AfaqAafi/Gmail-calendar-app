
import { Box, Divider, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import ProfileComponent from "./ProfileComponent";
const ProfilePopup = ({ anchorEl, open, setAnchorEl }) => {


  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {" "}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ".MuiList-root": {
              width: "300px",
              height: "160px",
              cursor: "pointer"
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 100,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ display: "flex", alignItems: 'center', gap: '16px', pl:1, pt: 2 }}>
          <Box>
            <ProfileComponent />
          </Box>
          <Box sx={{ display: "flex", flexDirection: 'column' }}>
            <Typography variant="h6">Afaq</Typography>
            <Typography sx={{fontSize: '16px', color: '#aaa'}}>afaq@gmail.com</Typography>
          </Box>
        </Box>
        <MenuItem sx={{mt: 3}} onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfilePopup