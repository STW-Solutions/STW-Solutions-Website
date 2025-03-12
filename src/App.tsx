import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home';

function App() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App;
