import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

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
import volkswagen from "../../images/Volkswagen.webp";
import Carousel from "../../components/Carousel/Carousel";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import wasteManagement from "../../images/waste-management.webp";
import biomassImg from "../../images/biomassImg.png";
import arrowRightCircle from "../../images/Arrow-right-circle.png";
import { useEffect, useRef } from "react";
import useScrollTriggeredCountUp from "../../hooks/useScrollTriggeredCountUp";

const Home = () => {
  //remove when # have been taken out of page

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const whyUs = [
    {
      title: t("promote_sustainability_development"),
      imageSrc: reason1,
      alt: "promote_sustainability_development",
      information: t("promote_sustainability_development_description"),
    },
    {
      title: t("conserve_natural_resources"),
      imageSrc: reason2,
      alt: "conserve_natural_resources",
      information: t("conserve_natural_resources_description"),
    },
    {
      title: t("support_communities"),
      imageSrc: reason3,
      alt: "support_communities",
      information: t("support_communities_description"),
    },
  ];

  const partners = [
    {
      imageSrc: cleanhub,
      alt: "CleanHub logo",
      link: "https://www.cleanhub.com/"
    },
    {
      imageSrc: carbonsate,
      alt: "Carbonsate logo",
      link: "https://www.carbonsate.com/"
    },
    {
      imageSrc: volkswagen,
      alt: "Volkswagen logo",
      link: "https://www.vw.com/"
    },
    {
      imageSrc: enef,
      alt: "ENEF logo",
      link: "https://www.minfof.gov.cm/"
    },
    {
      imageSrc: minepded,
      alt: "MINEPDED logo",
      link: "https://www.minfof.gov.cm/"
    },
    {
      imageSrc: ministryForestry,
      alt: "Ministry of Forestry Logo",
      link: "https://www.minfof.gov.cm/"
    },
  ];

  const slideButtonsData = [
    {
      dataBsSlideTo: "0",
      ariaLabel: "Slide 1",
    },
    {
      dataBsSlideTo: "1",
      ariaLabel: "Slide 2",
    },
    {
      dataBsSlideTo: "2",
      ariaLabel: "Slide 3",
    },
    {
      dataBsSlideTo: "3",
      ariaLabel: "Slide 4",
    },
    {
      dataBsSlideTo: "4",
      ariaLabel: "Slide 5",
    },
    {
      dataBsSlideTo: "5",
      ariaLabel: "Slide 6",
    },
  ];

  const recentProjectHighLights = [
    {
      imageUrl: biomassImg,
      name: "biomass_with_solar_energy",
      description: "biomass_with_solar_energy_description",
      alt: "",
      projectLink: "#",
    },
    {
      imageUrl: biomassImg,
      name: "biomass_with_solar_energy",
      description: "biomass_with_solar_energy_description",
      alt: "",
      projectLink: "#",
    },
  ];

  return (
    <div className="home-main">
      <Helmet>
        <title>{t("home_page")} - STW-Solutions Ltd</title>
        <meta name="home" content={t("meta_home")} />
      </Helmet>
      <section className="hero-main container-fluid pb-0 pb-md-5 bg-light-green">
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
                <div className="mt-5 row ps-5 justify-content-center hero-statistics">
                  <div className="col-6 col-sm-3">
                    <span className="bold-green-text" ref={projectsSmRef}>
                      {projectsSmCount}+
                    </span>
                    <span className="d-block">{t("projects_done")}</span>
                  </div>
                  <div className="col-6">
                    <span className="bold-green-text" ref={co2SmRef}>
                      {co2SmCount} {t("tCO2")}
                    </span>
                    <span className="d-block">
                      {t("annual_tons_of_CO2_reduced")}
                    </span>
                  </div>
                  <div className="col-6 col-sm-3">
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
                  <div className="col-6 mt-4 mt-sm-0">
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
      <section className="our-values-main bg-white container-fluid pb-5">
        <span className="text-center">
          <h2 className="stw-solutions-h2">{t("why_choose_stw_solutions")}?</h2>
          <div className="text-muted">{t("why_choose_stw_solutions_sub")}</div>
        </span>
        <div className="row mt-5 our-values-md">
          {whyUs.map((reason, i) => (
            <div className="col-12 col-md-4 px-xl-5" key={i}>
              <AnimateOnScroll reappear={true}>
                <Card
                  cardType="default"
                  imageSrc={reason.imageSrc}
                  information={t(reason.information)}
                  title={reason.title}
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
            carouselItems={whyUs}
            useCard={true}
            hasMovementBtn={false}
          ></Carousel>
        </div>
      </section>
      <section className="our-partners-main" id="ourPartners">
        <div className="container-fluid px-md-5 our-partners-head">
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
            {partners.map((partner, index) => (
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
            slideButtonsData={slideButtonsData}
          >
            {partners.map((partner, index) => (
              <img
                src={partner.imageSrc}
                className="partner-logo-sm"
                alt={t(partner.alt)}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <section className="how-it-works-main bg-white container-fluid pt-5 mt-md-5">
        <HowItWorks />
      </section>
      <section className="our-projects-main">
        <div className="px-2 px-md-5 our-projects-head bg-light-green container-fluid">
          <div className="row px-2 px-md-5">
            <h2 className="stw-solutions-h2 col-12 col-md-4 col-lg-3 text-capitalize">
              {t("recent_project_highlights")}
            </h2>
            <div className="col-md-4 col-lg-5"></div>
            <span className="col-12 col-md-4">
              {t("recent_project_highlights_description")}
            </span>
          </div>
        </div>
        {recentProjectHighLights.map((project, index) => (
          <div className="bg-white project-items">
            <div className="container-fluid bg-white project-item-box d-flex justify-content-between align-items-center my-2 my-md-5 flex-column flex-md-row">
              <img
                src={project.imageUrl}
                alt={project.alt}
                className="project-image"
              />
              <h4 className="fw-bold text-center mt-3 mt-md-0">
                {t(project.name)}
              </h4>
              <p className="description">{t(project.description)}</p>
              <Link
                to={project.projectLink}
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
