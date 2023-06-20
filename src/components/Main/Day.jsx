import { Box } from "@mui/material";
import dayjs from "dayjs";

const Day = ({ day, rowIdx }) => {
  function getCurrentDay() {
    return day.format("DD.MM.YYYY") === dayjs().format("DD.MM.YYYY") ? (
      <Box
        sx={{
          backgroundColor: "lightblue",
          width: "30px",
          color: "white",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {day.format("DD")}
      </Box>
    ) : (
      <Box>{day.format("DD")}</Box>
    );
  }

  return (
    <Box
      key={rowIdx}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, auto))",
        height: "130px",
        border: "1px solid #aaa",
        justifyItems: "center",
        pt: 1,
      }}
    >
      {rowIdx === 0 && <Box>{day.format("ddd")}</Box>}
      {getCurrentDay()}
    </Box>
  );
};

export default Day;
