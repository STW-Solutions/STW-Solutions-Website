import firstImg from "../../images/project1.png";
import secondImg from "../../images/project2.png";
import thirdImg from "../../images/project3.png";
import icon from "../../images/Arrow-right-circle.png";
import { useEffect, useState } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import NoItemAlert from "../../components/NoItemAlert/NoItemAlert";
import { Helmet } from "react-helmet";
import { projects } from "../../constants";
import { Project, ProjectCategory } from "../../models";
import { filterProjectsByCategories } from "../../services";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState(
    ProjectCategory.UNDER_DEVELOPMENT
  );

  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(
    filteredProjects.slice(0, 2)
  );

  useEffect(() => {
    const updatedProjects = filterProjectsByCategories(projects, [currentTab]);
    setFilteredProjects(updatedProjects);
    setDisplayedProjects(updatedProjects.slice(0, 2));
  }, [currentTab]);

  const toggleProjects = (action: string, startIndex: number) => {
    if (action === "show") {
      setDisplayedProjects([
        ...displayedProjects,
        ...filteredProjects.slice(startIndex, startIndex + 5),
      ]);
    }
    if (action === "hide") {
      setDisplayedProjects(filteredProjects.slice(startIndex, startIndex + 2));
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("projects_page")} - STW-Solutions Ltd</title>
        <meta name="projects" content={t("meta_projects")} />
      </Helmet>
      <div className="rounded-4  project-container">
        <div className="row pt-5 pb-3">
          <div className="col-12 col-lg-6 text-center mt-md-5">
            <h1 className="stw-solutions-h1 text-white py-md-4">
              {t("company_name")}{" "}
              <span className="text-capitalize">{t("projects")}</span>
            </h1>
            <p className="text-white px-md-5 mx-md-5">
              {t("ongoing_project_highlights_description")}
            </p>
          </div>
          <div className="pt-5 col-12 col-lg-6 text-center align-content-center d-lg-block d-none">
            <img
              src={firstImg}
              alt="image 1"
              width="75"
              height="75"
              className="img-fluid rounded mb-4"
            />
            <img
              src={secondImg}
              alt="image 1"
              width="115"
              height="115"
              className="img-fluid rounded mb-4"
            />
            <span className="border-danger">
              <img
                src={thirdImg}
                alt="image 1"
                width="130"
                height="130"
                className="img-fluid rounded mb-4"
              />
            </span>
            <img
              src={secondImg}
              alt="image 1"
              width="115"
              height="115"
              className="img-fluid rounded mb-4"
            />
            <img
              src={firstImg}
              alt="image 1"
              width="75"
              height="75"
              className="img-fluid rounded mb-4"
            />
          </div>
          <div className="justify-content-center align-content-center w-100 d-lg-none d-md-flex d-sm-flex">
            <img
              src={secondImg}
              alt="image 1"
              width="80"
              className="img-fluid rounded"
            />
            <img
              src={thirdImg}
              alt="image 1"
              width="115"
              className="img-fluid rounded"
            />
            <img
              src={secondImg}
              alt="image 1"
              width="80"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navigation p-5 d-none d-md-block">
          <ul className="nav nav-pills nav-fill p-4 shadow">
            <li className="nav-item">
              <button
                className={
                  "nav-link text-dark text-uppercase" +
                  (currentTab === ProjectCategory.UNDER_DEVELOPMENT
                    ? " isActive"
                    : "")
                }
                aria-current="page"
                type="button"
                onClick={() => {
                  setCurrentTab(ProjectCategory.UNDER_DEVELOPMENT);
                }}
              >
                {t("under_development")}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  "nav-link text-dark text-uppercase" +
                  (currentTab === ProjectCategory.COMING_SOON
                    ? " isActive"
                    : "")
                }
                type="button"
                onClick={() => {
                  setCurrentTab(ProjectCategory.COMING_SOON);
                }}
              >
                {t("coming_soon")}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  "nav-link text-dark text-uppercase" +
                  (currentTab === ProjectCategory.FORESTRY ? " isActive" : "")
                }
                onClick={() => {
                  setCurrentTab(ProjectCategory.FORESTRY);
                }}
              >
                {t("forestry")}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  "nav-link text-dark text-uppercase" +
                  (currentTab === ProjectCategory.WASTE_MANAGEMENT
                    ? " isActive"
                    : "")
                }
                onClick={() => {
                  setCurrentTab(ProjectCategory.WASTE_MANAGEMENT);
                }}
              >
                {t("waste_management")}
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown d-md-none px-2 pt-4">
          <button
            className="btn isActive dropdown-toggle w-100 py-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t("project_categories")}
          </button>
          <h5 className="text-capitalize pt-3 pb-2 fw-bold">
            {t(currentTab.toString().toLowerCase())} {t("projects")}
          </h5>
          <ul
            className={`dropdown-menu category-dropdown ${
              isDropdownOpen ? "show" : ""
            }`}
          >
            <li>
              <button
                className={
                  "dropdown-item text-uppercase" +
                  (currentTab === ProjectCategory.UNDER_DEVELOPMENT
                    ? " isActive"
                    : "")
                }
                onClick={() => {
                  setCurrentTab(ProjectCategory.UNDER_DEVELOPMENT);
                }}
              >
                {t("under_development")}
              </button>
            </li>
            <li>
              <button
                className={
                  "dropdown-item text-uppercase" +
                  (currentTab === ProjectCategory.COMING_SOON
                    ? " isActive"
                    : "")
                }
                onClick={() => {
                  setCurrentTab(ProjectCategory.COMING_SOON);
                }}
              >
                {t("coming_soon")}
              </button>
            </li>
            <li>
              <button
                className={
                  "dropdown-item text-uppercase" +
                  (currentTab === ProjectCategory.FORESTRY ? " isActive" : "")
                }
                onClick={() => {
                  setCurrentTab(ProjectCategory.FORESTRY);
                }}
              >
                {t("forestry")}
              </button>
            </li>
            <li>
              <button
                className={
                  "dropdown-item text-uppercase" +
                  (currentTab === ProjectCategory.WASTE_MANAGEMENT
                    ? " isActive"
                    : "")
                }
                onClick={() => {
                  setCurrentTab(ProjectCategory.WASTE_MANAGEMENT);
                }}
              >
                {t("waste_management")}
              </button>
            </li>
          </ul>
        </div>
        <div className="ps-md-5">
          {displayedProjects.map((project, index) => (
            <div
              className="row p-md-5 my-md-5 p-2 mx-auto rounded-4 align-items-center mb-3 mt-1 card-div"
              key={index}
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className="col-md-12 col-lg-3">
                <img
                  src={project.imageSrc}
                  width="240"
                  height="240"
                  className={`img-fluid w-100 ${project.imageClass}`}
                  alt={t(project.imageAlt)}
                />
              </div>
              <div className="col-lg-3 col-md-12">
                <span className="fs-4 fw-bold text-center text-md-start">
                  {t(project.name)}
                </span>
              </div>
              <div className="col-lg-3 col-md-12 text-truncate">
                {t(project.summary || "")}
              </div>
              <Link
                className="col-lg-2 col-md-12 text-end"
                to={project.moreInfo}
              >
                <img
                  src={icon}
                  width="50"
                  height="50"
                  className="img-fluid"
                  alt="alt-image"
                />
              </Link>
            </div>
          ))}
        </div>
        {!filteredProjects.length && (
          <div className="w-75 mx-auto">
            <NoItemAlert
              item={(currentTab + "_projects").toString().toLowerCase()}
              addContactUs={true}
            />
          </div>
        )}
        <div className="button-box">
          {filteredProjects.length !== displayedProjects.length && (
            <button
              className="shadow more-btn rounded text-white border-0 py-1 px-3"
              onClick={() => toggleProjects("show", displayedProjects.length)}
            >
              {t("show_more")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="arrow-svg ms-2"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>
          )}
          {filteredProjects.length === displayedProjects.length && (
            <button
              className="shadow more-btn rounded text-white border-0 py-1 px-3"
              onClick={() => toggleProjects("hide", 0)}
            >
              {t("show_less")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="arrow-svg ms-2"
              >
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
