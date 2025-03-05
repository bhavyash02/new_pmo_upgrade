// import PrivateRoute from "../modules/PrivateRoute";
import {
  HomePage,
  // LoginPage,
  //   PMODashboard,
  //   Reports,
  //   PlatformProject,
  //   ValueBoard,
  //   NewProject,
    PageNotFound,
} from "../pages";

export const appRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
