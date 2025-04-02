import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./NavBarSmall.css";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import ButtonOutline from "../../ButtonOutline/ButtonOutline";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBarSmall = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  const languages = ["en", "fr", "de"];
  return (
    <>
      <div className="text-capitalize bg-white py-2 navbar-sm">
        <div className="row mx-auto">
          <div className="dropdown col-3">
            <button
              className="ms-1 dropdown-toggle border-0 hamburger-icon rounded p-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="navBarSmallDropDown"
              data-bs-auto-close="outside"
            >
              <span>
                <FontAwesomeIcon
                  icon={faBars}
                  className="stw-green-icon fa-2x"
                />
              </span>
            </button>
            <ul
              className="dropdown-menu shadow"
              aria-labelledby="navBarSmallDropDown"
            >
              <li>
                <Link
                  className="dropdown-item stw-nav-sm-li"
                  aria-current="page"
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent text-capitalize"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="companyDropDown"
                  >
                    {t("about")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="companyDropDown"
                  >
                    <li>
                      <Link
                        className="dropdown-item stw-nav-sm-li"
                        to={"/company"}
                      >
                        {t("company")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("sustainability")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("partners")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("careers")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("contact")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent text-capitalize"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="solutionsDropDown"
                  >
                    {t("solutions")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="solutionsDropDown"
                  >
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to={"#"}>
                        {t("forestry_solutions")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("waste_management_solutions")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("renewable_energy_solutions")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent text-capitalize"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="projectsDropdown"
                  >
                    {t("projects")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="projectsDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item stw-nav-sm-li"
                        to="/projects"
                      >
                        {t("our_projects")}
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("project#1")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("project#2")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent text-capitalize"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="insightsDropDown"
                  >
                    {t("insights")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="insightsDropDown"
                  >
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to={"#"}>
                        {t("blog")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("events")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("news")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to="#">
                        {t("podcast")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent text-capitalize"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="languagesDropdown"
                  >
                    {t("languages")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="languagesDropdown"
                  >
                    {languages.map((item, index) => (
                      <li className="text-uppercase" key={item}>
                        <a
                          className="dropdown-item border-0 stw-nav-sm-li"
                          type="button"
                          onClick={() => onClickLanguageChange(item)}
                        >
                          <FontAwesomeIcon
                            icon={faGlobe}
                            className="stw-green-icon me-2"
                          />
                          {t(item)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-item bg-white d-flex flex-column align-items-center justify-content-center">
                <ButtonPrimary
                  classes={["stw-btn-w", "me-2", "w-100"]}
                  children={`${t("contact_us")}`}
                />
                <ButtonOutline
                  classes={["stw-btn-w", "me-2", "w-100", "mt-2"]}
                  children={`${t("blog")}`}
                />
              </li>
            </ul>
          </div>
          <div className="col-6"></div>
          <Link className="stw-solutions-logo-sm-box col-3 d-flex justify-content-center" to={"/"}>
            <img
              src="STW-Solution-Logo.png"
              alt={`${t("stw_solutions_logo")}`}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarSmall;
