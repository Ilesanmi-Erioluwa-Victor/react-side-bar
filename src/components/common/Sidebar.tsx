import React from "react";
import {
  Drawer,
  List,
  Toolbar,
  Stack,
  Avatar,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import sizeConfigs from "config/sizeConfigs";
import assets from "assets";
import colorConfigs from "config/colorConfigs";
import appRoutes from "routes/appRoutes";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color : colorConfigs.sidebar.color
        },
      }}
    >
      <List disablePadding>
        <Toolbar>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            <ListItemButton>
              <ListItemIcon>{route?.sidebarProps?.icon}</ListItemIcon>
              {route.sidebarProps.displayText}
            </ListItemButton>
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
