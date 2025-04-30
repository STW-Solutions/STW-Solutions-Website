import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./i18n";

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import Projects from "./Pages/Projects/Projects";
import "./index.css";
import Solutions from "./Pages/Solutions/Solutions";
import SolutionForestry from "./Pages/Solution-forestry/Solution-forestry";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  <BrowserRouter>
    <StrictMode>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/solutions-forestry" element={<SolutionForestry />} />
          <Route path="/waste-management" element={<SolutionForestry />} />
          <Route path="/renewable-energy" element={<SolutionForestry />} />
        </Routes>
      </MainLayout>
    </StrictMode>
  </BrowserRouter>
);
