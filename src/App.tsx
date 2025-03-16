import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home';
import {useTranslation} from "react-i18next";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Company from "./Pages/Company/Company";
import {Route, Routes} from "react-router";

function App() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
      <>
        {/*<NavBar onClickLanguageChange={handleLanguageChange} />*/}
        <main>
          <Routes>
            <Route path="/" element={<Company />} />
            <Route path="/company" element={<Company />}/>
              <Route path="*" element={<Home />} />
              {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </main>
        <Footer />
      </>
  )
}

export default App;
