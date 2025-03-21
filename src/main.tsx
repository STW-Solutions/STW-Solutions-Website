import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./i18n";
import { BrowserRouter, Route, Routes } from "react-router";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import { StrictMode } from "react";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainLayout>
    </StrictMode>
  </BrowserRouter>
);
