import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";

import "./App.css";

import Home from "./Pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <NavBar onClickLanguageChange={handleLanguageChange} />
      <main>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
