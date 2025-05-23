import { Link, useParams } from "react-router";
import { solutions } from "../../constants";
import "./SolutionDetails.css";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import useScrollTriggeredCountUp from "../../hooks/useScrollTriggeredCountUp";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SolutionForestry = () => {
  const solutionName = useParams().name;
  const solution = solutions.find((item) => item.alias === solutionName);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{t(solutionName || "")} - STW-Solutions Ltd</title>
          <meta name="projects" content={t("meta_" + solutionName || "")} />
        </Helmet>
      </HelmetProvider>
      <div>
        {solution && (
          <>
            <div className="container-fluid pb-5">
              <div className="page-header">
                <h1 className="text-white text-capitalize">
                  {t(solution?.title)}
                </h1>
                <p className="text-white fw-semibold">
                  {t(solution.titleDescription)}
                </p>
                <Link
                  className="btn browse-btn fw-bold text-capitalize text-decoration-none"
                  to={"/projects"}
                >
                  {t("browse_projects")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="browse-svg"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Link>
              </div>
              <div
                className="d-none d-md-block"
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "4%",
                  right: "4%",
                  bottom: "8%",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  zIndex: 1,
                  borderRadius: ".5rem",
                }}
              ></div>
              <div className="row solution-hero">
                <div className="col-md-6">
                  <div
                    className="row solution-details-hero-image1"
                    style={{
                      backgroundImage: `url(${solution?.heroImages[0].image.src})`,
                    }}
                  ></div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <div
                    className="row solution-details-hero-image2"
                    style={{
                      backgroundImage: `url(${solution?.heroImages[1].image.src})`,
                    }}
                  ></div>
                  <div
                    className="row solution-details-hero-image3"
                    style={{
                      backgroundImage: `url(${solution?.heroImages[2].image.src})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="container-fluid bg-white stats-div pt-5">
              <h2 className="text-center">{t("solution_goals_and_impact")}</h2>
              <div className="row align-items-start justify-content-between mt-3">
                <div className="col-md-6">
                  <p>{t(solution.statistics.description)}</p>
                  <ul>
                    {solution.statistics.items.map((item, i) => (
                      <li key={i}>
                        <span>
                          +{item.count}
                          {t(item.unit || "")}
                        </span>
                        <span className="ms-1">{t(item.name)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 d-none d-md-block p-3 p-lg-5 border-0 stats-details">
                  <div className="d-flex justify-content-between">
                    {solution.statistics.items.map((item, i) => (
                      <span key={i}>
                        <span className="bold-green-text">
                          +
                           {item.count}
                          {item.unit}
                        </span>
                        <span className="d-block">{t(item.name)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SolutionForestry;
