import React from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { RouteType } from "routes/config";
import { Link } from "react-router-dom";
import colorConfigs from "config/colorConfigs";

type Props = {
  item: RouteType;
};
const SidebarItem = ({ item }: Props) => {
  return item?.sidebarProps && item?.path ? (
    <ListItemButton
      component={Link}
      to={item?.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
        }}
      >
        {item?.sidebarProps?.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
