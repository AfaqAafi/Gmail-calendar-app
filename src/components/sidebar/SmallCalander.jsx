import React, { useEffect, useState } from "react";
import { getMonth } from "../../utils/GetMonth";
import dayjs from "dayjs";
import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useGlobalContext from "../../context/GlobalContext";
const SmallCalander = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, setSmallCallenderMonth } = useGlobalContext();

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const handlerIncrement = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };
  const handlerdecrement = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const getCurrentDate = (day) => {
    const format = "DD-MM-YY";
    const newDay = dayjs().format(format);
    const currday = day.format(format);

    if (newDay === currday) {
      return (
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
          {day.format("D")}
        </Box>
      );
    } else {
      return (
        <Typography variant="body2" sx={{ color: "#5f6368" }}>
          {day.format("D")}
        </Typography>
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontSize: "19px",
            fontWeight: 400,
          }}
        >
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </Typography>
        <Box>
          <ChevronLeftIcon
            sx={{ cursor: "pointer", color: "#5f6368" }}
            onClick={handlerIncrement}
          />
          <ChevronRightIcon
            sx={{ cursor: "pointer", color: "#5f6368" }}
            onClick={handlerdecrement}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          textAlign: "center",
          gridRowStart: 2,
          gap: "15px",
        }}
      >
        {currentMonth[0].map((day, i) => (
          <Typography
            variant="body2"
            key={i}
            sx={{
              color: "#5f6368",
              pt: 3,
            }}
          >
            {day.format("dd").charAt(0)}
          </Typography>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => setSmallCallenderMonth(currentMonthIdx)}
                key={idx}
              >
                {getCurrentDate(day)}
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default SmallCalander;
