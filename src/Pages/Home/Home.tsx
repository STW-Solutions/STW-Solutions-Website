import { useTranslation } from "react-i18next";
import "./Home.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-main">
      <section className="hero-main container-fluid">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="company-name ps-3 bold-green-text">{t("company_name")}</h1>
              <span className="hero-hint d-block text-center px-3 mt-5">
                {t("hero_hint")}
              </span>
              <div className="hero-details d-block mt-5 ps-3">
                <div className="pt-5">{t("hero_details")}</div>
              </div>
              <div className="mt-5 ps-3">
                <ButtonPrimary
                  children={t("get_involved")}
                  classes={["text-capitalize", "px-3", "py-2"]}
                />
              </div>
            </div>
            <div className="col-md-6 hero-img-box text-center">
              <img
                src="public/earth-nobg.png"
                className="hero-img"
                alt={t("earth")}
              />
              <div className="line"></div>
            </div>
            <div className="mt-5 col-md-12 d-flex justify-content-between align-items-center hero-statistics">
              <div>
                <span className="bold-green-text">{t("12_+")}</span>
                <span className="d-block">{t("projects_done")}</span>
              </div>
              <div>
                <span className="bold-green-text">{t("9000_tCO2")}</span>
                <span className="d-block">
                  {t("annual_tons_of_CO2_reduced")}
                </span>
              </div>
              <div>
                <span className="bold-green-text">{t("600")}</span>
                <span className="d-block">{t("trees_planted")}</span>
              </div>
              <div>
                <span className="bold-green-text text-uppercase">{t("sdgs")}</span>
                <span className="d-block">{t("(1,8,11,13,15,17)")}</span>
              </div>
              <div>
                <span className="bold-green-text">{t("+_600_Ha")}</span>
                <span className="d-block">{t("forest_planted")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
