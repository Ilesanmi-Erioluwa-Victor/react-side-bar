import React from "react";
import { RouteType } from "routes/config";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  return item?.sidebarProps ? <></> : null;
};

export default SidebarItemCollapse;
