import HomePage from "pages/Home/HomePage";
import DashboardLayout from "pages/Dashboard/DashboardLayout";

import { RouteType } from "./config";
import DashboardOutlinedIcon  from "@mui/icons-material/DashboardOutlined";

const appRoutes: RouteType[] = [
  {
    index: true,
    state: "home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    state : "Dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon : <DashboardOutlinedIcon />
    }
  },
];


export default appRoutes;
