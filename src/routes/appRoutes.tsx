import HomePage from "pages/Home/HomePage";
import DashboardLayout from "pages/Dashboard/DashboardLayout";

import { RouteType } from "./config";
import DashboardOutlinedIcon  from "@mui/icons-material/DashboardOutlined";
import DefaultPage from "pages/Dashboard/DefaultPage";

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
    },
    child: [
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText : "Default"
        }
      }
    ]
  },
];


export default appRoutes;
