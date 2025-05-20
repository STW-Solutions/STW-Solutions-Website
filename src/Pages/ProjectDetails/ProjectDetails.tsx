import { Link, useParams } from "react-router";
import { projects, unSDGs } from "../../constants";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./ProjectDetails.css";
import { useEffect, useState } from "react";
import { ImpactTransformation } from "../../models";

const ProjectDetails = () => {
  const projectName = useParams().name;
  const { t } = useTranslation();
  const project = projects.find((item) => item.alias === projectName);
  const [impactValue, setImpactValue] = useState<ImpactTransformation>();
  const sdgs = unSDGs;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setImpactValue(project?.impact[0]);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t(projectName || "")} - STW-Solutions Ltd</title>
        <meta name="projects" content={t("meta_" + projectName || "")} />
      </Helmet>
      <div className="main-container">
        <div className="container py-5 mt-5">
          <h1 className="stw-solutions-h1 text-center text-capitalize">
            {t(project?.title || "")}
          </h1>
          {project?.goal && (
            <p className="text-justify px-4">{t(project?.goal)}</p>
          )}
          <div
            className="project-details-hero mb-5"
            style={{ backgroundImage: `url(${project?.heroImageSrc})` }}
          ></div>
          <div className="text-justify px-4">
            <h5 className="fw-bold text-capitalize text-muted">
              {t("description")}
            </h5>
            {project?.description.map((paragraph, i) => (
              <p key={i}>{t(paragraph)}</p>
            ))}
          </div>
          {project?.impact.length && (
            <div className="px-4 mt-5">
              <h5 className="fw-bold text-muted">
                {t("impact_and_transformation")}
              </h5>
              <p className="mt-1">
                <ul className="nav nav-tabs ms-0">
                  {project.impact.map((impact, i) => (
                    <li
                      className={`nav-item ${
                        impactValue?.name === impact.name
                          ? " active-impact"
                          : ""
                      }`}
                      key={i}
                    >
                      <button
                        className="border-0 btn"
                        aria-current="page"
                        onClick={() => setImpactValue(impact)}
                      >
                        {t(impact.name)}
                      </button>
                    </li>
                  ))}
                </ul>
              </p>
              {impactValue && (
                <div>
                  {impactValue.description.main && (
                    <p>{t(impactValue.description.main)}</p>
                  )}
                  {impactValue.description.paragraph1 && (
                    <p>{t(impactValue.description.paragraph1)}</p>
                  )}
                  {impactValue.description.paragraph2 && (
                    <p>{t(impactValue.description.paragraph2)}</p>
                  )}
                  {impactValue.description.listDescription && (
                    <div>
                      {t(impactValue.description.listDescription)}
                      <ol>
                        {impactValue.description.listItems?.map((item, i) => (
                          <li key={i}>{t(item)}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {project?.sdgsInfo.sdgs && (
            <div className="px-4 mt-5">
              <h5 className="fw-bold text-muted text-uppercase">
                {t("sustainable_development_goals")}
              </h5>
              <p>{t("sdgs_definition")}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(project.sdgsInfo.description) || "",
                }}
              ></p>
              <div className="p-3 p-sm-1 p-md-2 p-lg-3 row">
                {sdgs
                  .filter((sdg) => project.sdgsInfo.sdgs.includes(sdg.id))
                  .map((projectSdg, i) => (
                    <div
                      className="sdg-card card col-12 col-sm-5 col-md-3 col-lg-2 p-3 mt-2 border rounded-3 shadow h-auto me-0 me-sm-1 me-md-2 me-lg-3"
                      key={i}
                    >
                      <img
                        src={projectSdg.iconSrc}
                        className="w-100"
                        alt="..."
                      />
                      <div className="card-body px-0">
                        <Link
                          to={projectSdg.moreInfoUrl}
                          target="_blank"
                          className={`rounded-0 btn ${projectSdg.class}`}
                        >
                          {t("more_info")}
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="px-4 mt-5">
            <h5 className="fw-bold text-capitalize text-muted">{t("tags")}</h5>
            <div className="mt-3">
              {project?.categories.map((category, i) => (
                <span
                  key={i}
                  className="border me-2 p-2 bg-secondary text-white rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="px-4 mt-5">
            {project?.timeLine.title && (
              <h5 className="fw-bold text-capitalize text-muted">
                {t(project?.timeLine.title)}
              </h5>
            )}
            {project?.timeLine.description && (
              <p>{t(project?.timeLine.description)}</p>
            )}
            <div className="d-flex mt-5 justify-content-between">
              <span>
                {project?.timeLine.startDate && (
                  <span>
                    <span className="d-flex align-items-center text-secondary">
                      <svg
                        className="clock-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      <span className="ms-1 text-capitalize fw-bold">
                        {t("started")}
                      </span>
                    </span>
                    <span className="d-block">
                      {project?.timeLine.startDate}
                    </span>
                  </span>
                )}
              </span>
              <span>
                {project?.timeLine.endDate && (
                  <span>
                    <span className="d-flex align-items-center text-secondary">
                      <svg
                        className="clock-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      <span className="ms-1 text-capitalize fw-bold">
                        {t("due_date")}
                      </span>
                    </span>
                    <span className="d-block">{project?.timeLine.endDate}</span>
                  </span>
                )}
              </span>
            </div>
          </div>
          <div className="px-4">
            {project?.location && (
              <h5 className="fw-bold text-capitalize text-muted">
                {t("location")}
              </h5>
            )}
            {project?.location && <p>{t(project?.location)}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
