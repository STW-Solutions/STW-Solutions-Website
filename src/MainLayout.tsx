import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import BackToTop from "./components/BackToTop/BackToTop";
import { BlogsContextProvider } from "./contexts/blogs-context-provider";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };
  return (
    <>
      <BlogsContextProvider>
        <NavBar onClickLanguageChange={handleLanguageChange} />
        <Outlet />
        <BackToTop />
        <Footer />
      </BlogsContextProvider>
    </>
  );
};
export default MainLayout;
