import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./i18n";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import SolutionDetails from "./Pages/SolutionDetails/SolutionDetails";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/company",
        element: <Company/>
      },
      {
        path: "/solutions/:name",
        element: <SolutionDetails />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/project-details/:name",
        element: <ProjectDetails />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blog-details/:slug",
        element: <BlogDetails />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
