import React from "react";
import { Box } from "@mui/material";
import Topbar from "components/common/Topbar";
import sizeConfigs from "config/sizeConfigs";
import Sidebar from "components/common/Sidebar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component={"nav"}
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      <Box>

      </Box>
      
    </Box>
  );
};

export default MainLayout;
