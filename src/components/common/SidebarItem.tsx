import React from "react";
import { useSelector } from "react-redux";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { RouteType } from "routes/config";
import { Link } from "react-router-dom";
import colorConfigs from "config/colorConfigs";
import { RootState } from "redux/store";

type Props = {
  item: RouteType;
};
const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  return item?.sidebarProps && item?.path ? (
    <ListItemButton
      component={Link}
      to={item?.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor : appState === item?.state
          ? colorConfigs.sidebar.activeBg
          : "unset",
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
