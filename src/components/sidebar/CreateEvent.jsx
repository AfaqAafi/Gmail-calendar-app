import { Box, Typography } from "@mui/material";
import React from "react";

const CreateEvent = () => {
  return (
    <Box
      component="button"
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        color: "#222",
        boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.1)",
        padding: "8px 36px",
        backgroundColor: "rgba(255, 255, 255)",
        border: "none",
        outline: "none",
        cursor: "pointer",
        borderRadius: "100px",
        marginTop: "15px",
        ":hover": {
          boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box sx={{ marginLeft: "2px", marginBottom: "1px" }}>
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path fill="#34A853" d="M16 16v14h4V20z"></path>
          <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
          <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
          <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>
      </Box>
      <Typography>Create</Typography>
    </Box>
  );
};

export default CreateEvent;
