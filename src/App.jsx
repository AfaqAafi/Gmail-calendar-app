// import { Box } from "@mui/material"
import { Box } from "@mui/material";
import CalenderHeader from "./components/Header/CalenderHeader";
import Main from "./components/Main/Main";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import useGlobalContext from "./context/GlobalContext";
import { useEffect, useState } from "react";
import { getMonth } from "./utils/GetMonth";

function App() {
  const { isOpenSidebar } = useGlobalContext();
  const { monthIndex } = useGlobalContext();
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <CalenderHeader />
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box>{isOpenSidebar && <SidebarContainer />}</Box>
        <Box sx={{ mt: 12, marginLeft: isOpenSidebar ? "260px" : 0 }}>
          <Main month={currentMonth} />
        </Box>
      </Box>
    </>
  );
}

export default App;
