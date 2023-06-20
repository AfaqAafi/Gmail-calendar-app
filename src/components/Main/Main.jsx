import { Box } from "@mui/material";
import React from "react";
import Day from "./Day";

const Main = ({ month }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "14px",
        width: "100%",
        height: "auto",
        marginBottom: "100px",
        textAlign: "center",
      }}
    >
      {month.map((row, i) => {
        return (
          <React.Fragment key={i}>
            {row.map((day, idx) => {
              return (
                <Box key={idx}>
                  <Day day={day} rowIdx={i} />
                </Box>
              );
            })}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Main;
