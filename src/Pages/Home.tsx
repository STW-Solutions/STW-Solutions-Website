import NavBar from "../components/NavBar/NavBar";
import { useTranslation } from "react-i18next";

const Home = () => {
const { i18n, t } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <NavBar onClickLanguageChange={handleLanguageChange} />
    </>
  );
};

export default Home;
