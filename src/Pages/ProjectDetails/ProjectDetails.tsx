import { useParams } from "react-router";
import { projects } from "../../constants";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./ProjectDetails.css";
import { useEffect } from "react";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projectName = useParams().name;
  const { t } = useTranslation();
  const project = projects.find((item) => item.alias === projectName);
  return (
    <>
      <Helmet>
        <title>{t(projectName || "")} - STW-Solutions Ltd</title>
        <meta name="projects" content={t("meta_" + projectName || "")} />
      </Helmet>
      <div className="main-container">
        <div className="container py-5 mt-5">
          <h1 className="stw-solutions-h1 text-center">
            {t(project?.title || "")}
          </h1>
          {project?.goal && (
            <p className="text-justify px-4">{t(project?.goal)}</p>
          )}
          <div
            className="project-details-hero mb-5"
            style={{ backgroundImage: `url(${project?.heroImageSrc})` }}
          ></div>
          {project?.description.map((paragraph) => (
            <p className="text-justify px-4">{t(paragraph)}</p>
          ))}
          <div className="px-4 mt-5">
            <h6 className="fw-bold text-capitalize text-muted">{t("tags")}</h6>
            <div className="mt-3">
              {project?.categories.map((category) => (
                <span className="border me-2 p-2 bg-secondary text-white rounded">
                  {category}
                </span>
              ))}
            </div>
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
                    <span className="d-block">{project?.timeLine.startDate}</span>
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
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
