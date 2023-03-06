import React from "react";
import { Box } from "@mui/material";
import Topbar from "components/common/Topbar";
import sizeConfigs from "config/sizeConfigs";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component={"nav"}
        sx={{
          width: sizeConfigs.sidebar.width,
        flexShrink : 0}}
      ></Box>
    </Box>
  );
};

export default MainLayout;
