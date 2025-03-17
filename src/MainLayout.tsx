import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

interface Props {
  children: any
}

const MainLayout = ({ children }: Props) => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <NavBar onClickLanguageChange={handleLanguageChange} />;
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
