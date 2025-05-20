import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Helmet,  HelmetProvider } from "react-helmet-async";

import "./Home.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import earth from "../../images/earth-nobg.png";
import Card from "../../components/Card/Card";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";
import Carousel from "../../components/Carousel/Carousel";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import arrowRightCircle from "../../images/Arrow-right-circle.png";
import { useRef } from "react";
import useScrollTriggeredCountUp from "../../hooks/useScrollTriggeredCountUp";
import { WhyUs, Partners, SlideButtonsPartnersData, projects } from "../../constants";
import { ProjectCategory } from "../../models";
import { filterProjectsByCategories } from "../../services/general-services";

const Home = () => {
  const { t } = useTranslation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectCount = useScrollTriggeredCountUp(projectsRef, 12);
  const projectsSmRef = useRef<HTMLDivElement>(null);
  const projectsSmCount = useScrollTriggeredCountUp(projectsSmRef, 12);
  const co2Ref = useRef<HTMLDivElement>(null);
  const co2Count = useScrollTriggeredCountUp(co2Ref, 9000);
  const co2SmRef = useRef<HTMLDivElement>(null);
  const co2SmCount = useScrollTriggeredCountUp(co2SmRef, 9000);
  const treesPlantedRef = useRef<HTMLDivElement>(null);
  const treesPlantedCount = useScrollTriggeredCountUp(treesPlantedRef, 600);
  const treesSmPlantedRef = useRef<HTMLDivElement>(null);
  const treesSmPlantedCount = useScrollTriggeredCountUp(treesSmPlantedRef, 600);
  const forestPlantedRef = useRef<HTMLDivElement>(null);
  const forestPlantedCount = useScrollTriggeredCountUp(forestPlantedRef, 600);
  const forestSmPlantedRef = useRef<HTMLDivElement>(null);
  const forestSmPlantedCount = useScrollTriggeredCountUp(
    forestSmPlantedRef,
    600
  );

  const projectHighLights = filterProjectsByCategories(projects, [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.FORESTRY])

  return (
    <div className="home-main">
      <HelmetProvider>
        <Helmet>
        <title>{t("home_page")} - STW-Solutions Ltd</title>
        <meta name="home" content={t("meta_home")} />
      </Helmet>
      </HelmetProvider>
      <section className="hero-main container-fluid py-md-5 pb-0 bg-light-green">
        <div className="container pt-5 pb-lg-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column align-items-center">
                <h1 className="company-name ps-md-3 stw-solutions-h1">
                  {t("company_name")}
                </h1>
                <span className="hero-hint d-block text-center px-3 mt-3 fw-bold">
                  {t("hero_hint")}
                </span>
              </div>
              <div className="mt-5 ps-3">
                <ButtonPrimary
                  children={t("get_involved")}
                  classes={[
                    "text-capitalize",
                    "px-3",
                    "py-3",
                    "d-block d-lg-none w-100",
                  ]}
                />
              </div>
              {/* on small screens */}
              <div className="d-block d-lg-none">
                <div className="mt-5 row ps-1 ps-md-5 justify-content-center hero-statistics">
                  <div className="col-6 col-sm-3 projects-done-sm-box stats-border">
                    <span className="bold-green-text" ref={projectsSmRef}>
                      {projectsSmCount}+
                    </span>
                    <span className="d-block">{t("projects_done")}</span>
                  </div>
                  <div className="col-6 co2-sm-box stats-border">
                    <span className="bold-green-text" ref={co2SmRef}>
                      {co2SmCount} {t("tCO2")}
                    </span>
                    <span className="d-block">
                      {t("annual_tons_of_CO2_reduced")}
                    </span>
                  </div>
                  <div className="col-6 col-sm-3 trees-planted-sm-box">
                    <span className="bold-green-text" ref={treesSmPlantedRef}>
                      {treesSmPlantedCount}
                    </span>
                    <span className="d-block">{t("trees_planted")}</span>
                  </div>
                  <div className="col-6 col-sm-4 mt-2">
                    <span className="bold-green-text text-uppercase">
                      {t("sdgs")}
                    </span>
                    <span className="d-block">{t("(1,8,11,13,15,17)")}</span>
                  </div>
                  <div className="col-12 col-sm-6 pt-3 pt-md-0 text-center forest-panted-sm-box">
                    <span className="bold-green-text">+</span>
                    <span className="bold-green-text" ref={forestSmPlantedRef}>
                      {forestSmPlantedCount}
                      {t("Ha")}
                    </span>
                    <span className="d-block ms-4">{t("forest_planted")}</span>
                  </div>
                </div>
              </div>
              <div className="line d-none d-lg-block"></div>
              <div className="hero-details d-block mt-2 mt-lg-4 ps-3">
                <div className="pt-3">{t("hero_details")}</div>
              </div>
              <div className="mt-5 ps-3">
                <ButtonPrimary
                  children={t("get_involved")}
                  classes={[
                    "text-capitalize",
                    "px-3",
                    "py-2",
                    "d-none d-lg-block w-50",
                  ]}
                />
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-6 hero-img-box text-center">
              <img src={earth} className="hero-img" alt={t("earth")} />
              <div className="line"></div>
            </div>
            <div className="mt-5 col-lg-12 d-none d-lg-flex justify-content-between align-items-center hero-statistics">
              <div>
                <span className="bold-green-text" ref={projectsRef}>
                  {projectCount}+
                </span>
                <span className="d-block">{t("projects_done")}</span>
              </div>
              <div>
                <span className="bold-green-text" ref={co2Ref}>
                  {co2Count} {t("tCO2")}
                </span>
                <span className="d-block">
                  {t("annual_tons_of_CO2_reduced")}
                </span>
              </div>
              <div>
                <span className="bold-green-text" ref={treesPlantedRef}>
                  {treesPlantedCount}
                </span>
                <span className="d-block">{t("trees_planted")}</span>
              </div>
              <div>
                <span className="bold-green-text text-uppercase">
                  {t("sdgs")}
                </span>
                <span className="d-block">{t("(1,8,11,13,15,17)")}</span>
              </div>
              <div>
                <span className="bold-green-text" ref={forestPlantedRef}>
                  {forestPlantedCount}
                  {t("Ha")}
                </span>
                <span className="d-block">{t("forest_planted")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-values-main bg-white container-fluid py-5">
        <span className="text-center">
          <h2 className="stw-solutions-h2">{t("why_choose_stw_solutions")}?</h2>
          <div className="text-muted">{t("why_choose_stw_solutions_sub")}</div>
        </span>
        <div className="row mt-5 our-values-md">
          {WhyUs.map((reason, i) => (
            <div className="col-12 col-md-4 px-xl-5" key={i}>
              <AnimateOnScroll reappear={true}>
                <Card
                  cardType="default"
                  imageSrc={reason.imageSrc}
                  information={t(reason.information)}
                  title={t(reason.title)}
                  backgroundColor="#E4FFF3"
                  cardTitleClasses={"stw-card-title text-capitalize"}
                  cardTextClasses={"text-muted"}
                />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
        <div className="row our-values-sm mt-5">
          <Carousel
            id="ourValuesCarousel"
            carouselItems={WhyUs}
            useCard={true}
            hasMovementBtn={false}
          ></Carousel>
        </div>
      </section>
      <section className="our-partners-main" id="our-partners">
        <div className="container-fluid px-md-5 our-partners-head py-5">
          <div className="row px-sm-2 px-md-5">
            <h2 className="stw-solutions-h2 col-12 col-md-4 col-lg-3 text-break">
              {t("our_partners_and_investors")}
            </h2>
            <div className="col-md-4 col-lg-5"></div>
            <span className="col-12 col-md-4">
              {t("we_believe_that_collaboration_is_key")}
            </span>
          </div>
        </div>
        <div className="container-fluid px-5 our-partners-md">
          <div className="row px-5">
            {Partners.map((partner, index) => (
              <div className="mt-4 col-md-4 col-lg-3 col-xl-2" key={index}>
                <Link to={partner.link} target="_blank">
                  <div className="shadow bg-white partner-logo-box rounded">
                    <img src={partner.imageSrc} alt={t(partner.alt)} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="our-partners-sm container pt-4">
          <Carousel
            id="partnersCarousel"
            hasMovementBtn={false}
            slideButtonsData={SlideButtonsPartnersData}
          >
            {Partners.map((partner, index) => (
              <img key={index}
                src={partner.imageSrc}
                className="partner-logo-sm"
                alt={t(partner.alt)}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <section className="how-it-works-main bg-white container-fluid pt-5 mt-md-2">
        <HowItWorks />
      </section>
      <section className="our-projects-main">
        <div className="px-md-5 our-projects-head bg-light-green py-5 container-fluid">
          <div className="row px-2 px-md-5">
            <h2 className="stw-solutions-h2 col-12 col-md-4 col-lg-3 text-capitalize">
              {t("ongoing_project_highlights")}
            </h2>
            <div className="col-md-4 col-lg-5"></div>
            <span className="col-12 col-md-4">
              {t("ongoing_project_highlights_description")}
            </span>
          </div>
        </div>
        {projectHighLights.map((project, index) => (
          <div className="bg-white project-items container-fluid py-5" key={index}>
            <div className="container rounded shadow p-5 project-item-box d-flex justify-content-between align-items-center mb-1 flex-column flex-md-row">
              <img
                src={project.heroImageSrc}
                alt={project.heroImageAlt}
                className={project.heroImageClass}
              />
              <h4 className="fw-bold text-center mt-3 mt-md-0 text-break project-title text-capitalize">
                {t(project.title)}
              </h4>
              <p className="description">{t(project.goal || '')}</p>
              <Link
                to={project.moreInfo}
                className="ms-auto ms-md-0 me-5 me-md-0"
              >
                <img
                  src={arrowRightCircle}
                  width="55"
                  height="55"
                  className="right-arrow"
                  alt={t("right_arrow")}
                />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
