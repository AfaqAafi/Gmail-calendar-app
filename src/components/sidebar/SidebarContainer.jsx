import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import useGlobalContext from "../../context/GlobalContext";
import CreateEvent from "./CreateEvent";
import SmallCalander from "./SmallCalander";

const SidebarContainer = () => {
  const { isOpenSidebar } = useGlobalContext();

  return (
    <AnimatePresence>
      {isOpenSidebar && (
        <motion.aside
          initial={{ x: -255 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Box
            sx={{
              width: "255px",
              height: "100vh",
              position: "fixed",
              top: "75px",
              left: 0,
              pl: 2,
            }}
          >
            <CreateEvent />
            <SmallCalander />
          </Box>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default SidebarContainer;
