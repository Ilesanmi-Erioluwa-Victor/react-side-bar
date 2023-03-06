import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { FormatListBulletedOutlined } from "@mui/icons-material";
import { RouteType } from "./config";

import HomePage from "pages/Home/HomePage";
import DashboardLayout from "pages/Dashboard/DashboardLayout";
import DefaultPage from "pages/Dashboard/DefaultPage";
import DashboardIndex from "pages/Dashboard/DashboardIndex";
import Changelog from "pages/Changelog/Changelog";
import AnalyticalPage from "pages/Dashboard/AnalyticalPage";
import SaasPage from "pages/Dashboard/SaasPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    state: "home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    state: "Dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },

      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        },
      },

      {
        path: "/dashboard/analytics",
        element: <AnalyticalPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytics",
        },
      },

      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "SaasPage",
        },
      },
    ],
  },

  {
    path: "/changelog",
    state: "changelog",
    element: <Changelog />,
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlined />,
    },
  },
];

export default appRoutes;
