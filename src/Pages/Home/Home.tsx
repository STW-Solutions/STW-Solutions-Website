import { useTranslation } from "react-i18next";
import "./Home.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import earth from "../../images/earth-nobg.png";
import Card from "../../components/Card/Card";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";

const Home = () => {
  const { t } = useTranslation();
  const whyUs = [
    {
      name: "promote_sustainability_development",
      imageUrl: "/src/images/value1.png",
      alt: "promote_sustainability_development",
      description: "promote_sustainability_development_description",
    },
    {
      name: "conserve_natural_resources",
      imageUrl: "/src/images/value2.png",
      alt: "conserve_natural_resources",
      description: "conserve_natural_resources_description",
    },
    {
      name: "support_communities",
      imageUrl: "/src/images/value3.png",
      alt: "support_communities",
      description: "support_communities_description",
    },
  ];

  return (
    <div className="home-main">
      <section className="hero-main container-fluid">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="company-name ps-3 bold-green-text">
                {t("company_name")}
              </h1>
              <span className="hero-hint d-block text-center px-3 mt-5">
                {t("hero_hint")}
              </span>
              <div className="line"></div>
              <div className="hero-details d-block mt-4 ps-3">
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
              <img src={earth} className="hero-img" alt={t("earth")} />
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
                <span className="bold-green-text text-uppercase">
                  {t("sdgs")}
                </span>
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
      <section className="our-values-main bg-white container-fluid ">
        <span className="text-center">
          <h2 className="fw-bold">{t("why_choose_stw_solutions")}?</h2>
          <div className="text-muted">{t("why_choose_stw_solutions_sub")}</div>
        </span>
        <div className="row mt-5">
          {whyUs.map((reason, index) => (
            <div className="col-12 col-md-4 px-xl-5" key={index}>
              <AnimateOnScroll reappear={true}>
                <Card
                  cardType="default"
                  imageSrc={reason.imageUrl}
                  information={t(reason.description)}
                  title={t(reason.name)}
                  backgroundColor="#E4FFF3"
                  cardTitleClasses={["stw-card-title", "text-capitalize"]}
                  cardTextClasses={["text-muted"]}
                />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
