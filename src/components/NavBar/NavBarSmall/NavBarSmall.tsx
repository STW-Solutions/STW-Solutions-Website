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
      <div className="d-block d-md-none">
        <div className="d-flex justify-content-between align-items-center w-100 px-5">
          <div className="dropdown">
            <button
              className="ms-1 dropdown-toggle border-0 shadow hamburger-icon"
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
            <ul className="dropdown-menu" aria-labelledby="navBarSmallDropDown">
              <li>
                <Link
                  className="dropdown-item stw-nav-link my-1 mx-4"
                  aria-current="page"
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="dropdown-item mx-4">
                <div className="dropend">
                  <button
                    className="dropdown-toggle my-1 border-0"
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
                      <Link className="dropdown-item" to={"/company"}>
                        {t("about_us")}
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("our_team")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("recent_projects")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("partners")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("how_it_works")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  className="dropdown-item active mx-4 my-1"
                  aria-current="page"
                  to="/"
                >
                  {t("services")}
                </Link>
              </li>
              <li className="dropdown-item mx-4">
                <div className="dropend">
                  <button
                    className="dropdown-toggle my-1 border-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    id="projectsDropdown"
                  >
                    {t("projects")}
                  </button>
                  <ul
                    className="dropdown-menu project-dropdown-menu"
                    aria-labelledby="projectsDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("category1")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("category2")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {t("category3")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-item d-flex flex-column align-items-center justify-content-center">
                <ButtonPrimary
                  classes={["stw-btn-w", "me-2", "w-100"]}
                  children={`${t("contact_us")}`}
                />
                <ButtonOutline
                  classes={["stw-btn-w", "me-2", "w-100", "mt-2"]}
                  children={`${t("blog")}`}
                />
              </li>
              <li className="dropdown-item mx-4">
                <div className="dropend">
                  <button
                    className="dropdown-toggle my-1 border-0"
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
                    <li>
                      <a className="dropdown-item border-0" type="button">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="stw-green-icon"
                        />
                        {t("en")}
                      </a>
                    </li>
                    <li>
                      <button className="dropdown-item border-0" type="button">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="stw-green-icon"
                        />
                        {t("fr")}
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <Link className="stw-solutions-logo-box" to={"/"}>
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
