import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./i18n";
import { BrowserRouter, Route, Routes } from "react-router";
import Company from "./Pages/Company/Company";
import MainLayout from "./MainLayout";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);
