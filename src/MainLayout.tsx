import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import BackToTop from "./components/BackToTop/BackToTop";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <NavBar onClickLanguageChange={handleLanguageChange} />
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
};
export default MainLayout;
