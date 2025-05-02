import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./Solutions-template.css";
import useScrollTriggeredCountUp from "../../hooks/useScrollTriggeredCountUp";
import { useRef } from "react";
import {SolutionsTemplateProps} from "../../models";




const SolutionsTemplate = ({
  header,
  forestryHeader,
  forestrySubHeader,
  callToAction,
  forestrySolutions,
  businessText,
  exploreText,
  topProjectsText,
  cardData,
  initiatives,
}: SolutionsTemplateProps) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectCount = useScrollTriggeredCountUp(projectsRef, 12);
  const treesPlantedRef = useRef<HTMLDivElement>(null);
  const treesPlantedCount = useScrollTriggeredCountUp(treesPlantedRef, 600);
  const forestsPreservedRef = useRef<HTMLDivElement>(null);
  const forestsPreservedCount = useScrollTriggeredCountUp(
    forestsPreservedRef,
    600
  );
    const { t } = useTranslation();

    return (
    <div className="container-fluid">
      <div
        className="services-container mb-5"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="row w-100">
          <div className="col-md-6 text-white d-flex align-items-center justify-content-center">
            <h1 className="text-md-start text-center text-white p-5 header stw-solutions-h1">
                {t(forestryHeader)}
            </h1>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-end d-none d-lg-flex">
            <div className="info-card d-flex align-items-center flex-wrap ">
              <div className="info-item text-center">
                <h1 className="fw-bolder" ref={projectsRef}>
                  {projectCount}+
                </h1>
                <p>{t(forestrySubHeader)}</p>
              </div>
              <div className="info-item text-center">
                <h1 className="fw-bolder" ref={treesPlantedRef}>
                  {treesPlantedCount} +
                </h1>
                <p>{t(callToAction)}</p>
              </div>
              <div className="info-item text-center">
                <h1 className="fw-bolder" ref={forestsPreservedRef}>
                  + {forestsPreservedCount} Ha
                </h1>
                <p>{t(forestrySolutions)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 px-md-5 mt-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
          <div className="py-3">
            <h2 className="fw-bolder fs-2 header-2-text text-center text-md-start">
              {t(businessText)}
              <p>{t(exploreText)}</p>
            </h2>
          </div>
          <div className="py-3">
            <a
              className="btn btn-call btn-success p-2 text-white fs-5"
              href="#"
            >
              {t(topProjectsText)}
            </a>
          </div>
        </div>
        <div className="row mx-2">
          {initiatives.map((item, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="d-flex flex-column align-items-center initiatives-box text-center p-3 shadow">
                <img
                  src={item.img}
                  width="80"
                  className="img-fluid mb-3"
                  alt={t(item.title)}
                />
                <h4 className="fw-bold">{t(item.title)}</h4>
                <p className="text-muted svg-text-1">{t(item.text)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row box-margin-top mb-3">
          <div className="col-med-8 buttom-page text-center text-md-start">
            <p className="text-white text-large text-wrap explore-text">
              {t(exploreText)}
              <br />
              <span>{t(topProjectsText)}</span>
            </p>
            <div className="my-5">
              <Link
                className="btn bg-white text-success p-4 fs-2"
                to="/projects"
              >
                {t(callToAction)}
                <span className="fs-4 text-success bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#348353"
                      d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-med-3 p-3 d-flex flex-column justify-content-center align-items-center  card-class">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="row py-2 shadow justify-content-center align-items-center mb-4 box-card"
              >
                <h3 className="text-center title-color fw-bolder">
                  {t(card.title)}
                </h3>
                <div className="col-12 col-md-6 text-center p-md-3">
                  <img
                    src={card.imgSrc}
                    className="small-img"
                    height="130"
                    width="200"
                    alt={t(card.altText)}
                  />
                </div>
                <div className="col-12 col-md-6 text-center">
                  <p className="fs-6">{t(card.description)}</p>
                  <a
                    className="btn btn-success btn-call text-white mt-2"
                    href="#"
                  >
                    {t(card.linkText)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsTemplate;