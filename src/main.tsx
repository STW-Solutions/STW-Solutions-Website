import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./i18n";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import Projects from "./Pages/Projects/Projects";
import "./index.css";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import SolutionDetails from "./Pages/Solution-details/Solution-details";
import Blogs from "./Pages/Blogs/Blogs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  <BrowserRouter>
    <StrictMode>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solutions/:name" element={<SolutionDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details/:name" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </MainLayout>
    </StrictMode>
  </BrowserRouter>
);
