import { createBrowserRouter } from "react-router";

import Layout from "../layout/MainLayout.jsx";

import Dashboard from "../pages/Dashboard";
import QuestionTracker from "../pages/QuestionTracker.jsx";
import ProgressAnalytics from "../pages/ProgressAnalytics";
import MachineCoding from "../pages/MachineCoding";
import Settings from "../pages/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "questions",
        element: <QuestionTracker />,
      },
      {
        path: "progress",
        element: <ProgressAnalytics />,
      },
      {
        path: "machine-coding",
        element: <MachineCoding />,
      },{
        path:'settings',
        element:<Settings/>
      }
    ],
  },
]);

export default router;