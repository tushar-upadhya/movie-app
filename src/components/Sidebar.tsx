import { Box } from "@mui/material";
import { navLinks } from "../utils/navlink";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return <Box>SideBar</Box>;
};

export default Sidebar;
