import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./Home.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import earth from "../../images/earth-nobg.png";
import Card from "../../components/Card/Card";
import reason1 from "../../images/reason1.png";
import reason2 from "../../images/reason2.png";
import reason3 from "../../images/reason3.png";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";
import cleanhub from "../../images/CleanHub.png";
import enef from "../../images/ENEFCam.png";
import carbonsate from "../../images/Carbonsate.png";
import minepded from "../../images/MINEPDED.png";
import ministryForestry from "../../images/MinistryForestry.png";
import volkswagen from "../../images/Volkswagen.png";

const Home = () => {
  const { t } = useTranslation();
  const whyUs = [
    {
      name: "promote_sustainability_development",
      imageUrl: reason1,
      alt: "promote_sustainability_development",
      description: "promote_sustainability_development_description",
    },
    {
      name: "conserve_natural_resources",
      imageUrl: reason2,
      alt: "conserve_natural_resources",
      description: "conserve_natural_resources_description",
    },
    {
      name: "support_communities",
      imageUrl: reason3,
      alt: "support_communities",
      description: "support_communities_description",
    },
  ];

  return (
    <div className="home-main">
      <section className="hero-main container-fluid bg-light-green">
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
      <section className="our-partners-main">
        <div className="container-fluid px-5 our-partners-head">
          <div className="row px-5">
            <h2 className="fw-bold col-md-2 text-break">
              {t("our_partners_and_investors")}
            </h2>
            <div className="col-md-7"></div>
            <span className="col-md-3">
              {t("we_believe_that_collaboration_is_key")}
            </span>
          </div>
        </div>
        <div className="container-fluid px-5">
          <div className="row px-5">
            <div className="col-md-3 col-lg-2">
              <Link to="#" target="_blank">
                <div className="shadow bg-white partner-logo-box rounded">
                  <img
                    src={cleanhub}
                    alt="CleanHub logo"
                    className="cleanhub-logo w-75"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-2">
              <Link to="#" target="_blank">
                <div className="shadow bg-white partner-logo-box rounded">
                  <img
                    src={carbonsate}
                    alt="Carbonsate logo"
                    className="w-100"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-2">
              <Link to="#" target="_blank">
                <div className="shadow bg-white partner-logo-box rounded">
                  <img
                    src={volkswagen}
                    alt="Volkswagen logo"
                    className="volkswagen-logo"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-2">
              <Link to="#" target="_blank">
                <div className="shadow bg-white partner-logo-box rounded">
                  <img src={enef} alt="ENEF logo" className="w-100" />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-2">
              <Link to="#" target="_blank">
                <div className="shadow bg-white partner-logo-box rounded">
                  <img src={minepded} alt="MINEPDED logo" className="w-100" />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-2">
              <Link to="#" target="_blank">
                <div className="shadow bg-white partner-logo-box rounded">
                  <img
                    src={ministryForestry}
                    alt="Ministry of Forestry logo"
                    className="w-100"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
