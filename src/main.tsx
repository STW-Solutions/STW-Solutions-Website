import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./i18n";
import { BrowserRouter, Route, Routes } from "react-router";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </MainLayout>
    </StrictMode>
  </BrowserRouter>
);
