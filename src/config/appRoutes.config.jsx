
import {
  HomePage,
  PortFolioStatus,
  PageNotFound,
  PortFolioHomePage,
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
    path: "/portfolioStatusView",
    element: <PortFolioStatus />,
  },
  {
    path: `/portfolio-status/edit/:id`,
    element: <PortFolioStatus />,
  },
  {
    path: "/portfolio",
    element: <PortFolioHomePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
];
