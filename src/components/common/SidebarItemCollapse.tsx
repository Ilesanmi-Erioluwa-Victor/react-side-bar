import React, { useState } from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { RouteType } from "routes/config";
import colorConfigs from "config/colorConfigs";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return item?.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
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
    </>
  ) : null;
};

export default SidebarItemCollapse;
