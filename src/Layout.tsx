import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <NavBar onClickLanguageChange={handleLanguageChange}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
