import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./i18n";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import Projects from "./Pages/Projects/Projects";
import "./index.css";
import Solutions from "./Pages/Solutions/Solutions";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainLayout>
    </StrictMode>
  </BrowserRouter>
);
