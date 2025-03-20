import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./NavBarSmall.css";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import ButtonOutline from "../../ButtonOutline/ButtonOutline";

const NavBarSmall = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-block d-md-none text-capitalize">
        <div className="d-flex justify-content-between align-items-center w-100 px-3 px-sm-5">
          <div className="dropdown">
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
            <ul className="dropdown-menu shadow" aria-labelledby="navBarSmallDropDown">
              <li>
                <Link className="dropdown-item stw-nav-sm-li" aria-current="page" to="/">
                  {t("home")}
                </Link>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="companyDropDown"
                  >
                    {t("company")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="companyDropDown"
                  >
                    <li>
                      <Link className="dropdown-item stw-nav-sm-li" to={"/company"}>
                        {t("about_us")}
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("our_team")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("recent_projects")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("partners")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("how_it_works")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="dropdown-item stw-nav-sm-li" aria-current="page" to="/">
                  {t("services")}
                </Link>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent"
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
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("category1")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("category2")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item stw-nav-sm-li" href="#">
                        {t("category3")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item bg-white stw-nav-sm-li">
                <div className="dropend">
                  <button
                    className="dropdown-toggle border-0 bg-transparent"
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
                    <li className="text-uppercase">
                      <a className="dropdown-item border-0 stw-nav-sm-li" type="button">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="stw-green-icon me-2"
                        />
                        {t("en")}
                      </a>
                    </li>
                    <li>
                      <button className="dropdown-item border-0 stw-nav-sm-li text-uppercase" type="button">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="stw-green-icon me-2"
                        />
                        {t("fr")}
                      </button>
                    </li>
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
          <Link className="stw-solutions-logo-sm-box" to={"/"}>
            <img
              src="STW-Solution-Logo.png"
              alt={`${t("stw_solutions_logo")}`}
              className="w-100"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarSmall;
