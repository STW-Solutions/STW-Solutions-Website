import firstImg from "../../images/project1.png";
import secondImg from "../../images/project2.png";
import thirdImg from "../../images/project3.png";
import icon from "../../images/Arrow-right-circle.png";
import biomassImg from "../../images/biomassImg.png";
import wasteManagement from "../../images/waste-management.webp";
import { useState } from "react";
import agriImg from "../../images/agri-management.jpg";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import NoItemAlert from "../../components/NoItemAlert/NoItemAlert";
import { Helmet } from "react-helmet";
import { projects } from "../../constants";
import { ProjectCategory } from "../../models";
import { filterProjectsByCategories } from "../../services";

const Projects = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState(ProjectCategory.UNDER_DEVELOPMENT);

  const [filteredProjects, setFilteredProjects] = useState(
    filterProjectsByCategories(projects, [ProjectCategory.UNDER_DEVELOPMENT])
  );

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
                  (currentTab === ProjectCategory.UNDER_DEVELOPMENT ? " isActive" : "")
                }
                aria-current="page"
                type="button"
                onClick={() => {
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.UNDER_DEVELOPMENT]));
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
                  (currentTab === ProjectCategory.COMING_SOON ? " isActive" : "")
                }
                type="button"
                onClick={() => {
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.COMING_SOON]));
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
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.FORESTRY]));
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
                  (currentTab === ProjectCategory.WASTE_MANAGEMENT ? " isActive" : "")
                }
                onClick={() => {
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.WASTE_MANAGEMENT]));
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
                  (currentTab === ProjectCategory.UNDER_DEVELOPMENT ? " isActive" : "")
                }
                onClick={() => {
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.UNDER_DEVELOPMENT]));
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
                  (currentTab === ProjectCategory.COMING_SOON ? " isActive" : "")
                }
                onClick={() => {
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.COMING_SOON]));
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
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.FORESTRY]));
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
                  (currentTab === ProjectCategory.WASTE_MANAGEMENT ? " isActive" : "")
                }
                onClick={() => {
                  setFilteredProjects(filterProjectsByCategories(projects, [ProjectCategory.WASTE_MANAGEMENT]));
                  setCurrentTab(ProjectCategory.WASTE_MANAGEMENT);
                }}
              >
                {t("waste_management")}
              </button>
            </li>
          </ul>
        </div>
        <div className="ps-md-5">
          {filteredProjects.map((project, index) => (
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
                  alt="alt-image"
                />
              </div>
              <div className="col-lg-3 col-md-12">
                <span className="fs-4 fw-bold text-center text-md-start">
                  {t(project.name)}
                </span>
              </div>
              <div className="col-lg-3 col-md-12">{t(project.description)}</div>
              <Link className="col-lg-2 col-md-12 text-end" to="#">
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
      </div>
    </>
  );
};

export default Projects;
