import { useTranslation } from "react-i18next";

interface Props {
onClickLanguageChange: (language: string) => void
}

const NavBar = ({ onClickLanguageChange }: Props) => {
 
  const { t } = useTranslation();
  return (
    <div className="d-flex mt-5 mx-auto justify-content-center">
      <button type="button" className="btn btn-primary" onClick={() => onClickLanguageChange("en")}>
        {t("english")}
      </button>
      <button type="button" className="ms-2 btn btn-secondary" onClick={() => onClickLanguageChange("fr")}>
      {t("french")}
      </button>

      <p className="p-5">
        {t("test")}
      </p>
    </div>
  );
};

export default NavBar;
