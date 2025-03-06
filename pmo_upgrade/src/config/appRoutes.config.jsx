// import PrivateRoute from "../modules/PrivateRoute";
import {
  HomePage,
  PortFolioStatus,
  PageNotFound,
} from "../pages";

export const appRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/portfolio-status",
    element: <PortFolioStatus />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
];
