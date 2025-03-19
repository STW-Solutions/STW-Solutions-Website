import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonOutline from "../ButtonOutline/ButtonOutline";
import NavBarLarge from "./NavBarLarge/NavBarLarge";
import NavBarSmall from "./NavBarSmall/NavBarSmall";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBar = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed-top py-2 pe-5">
      {/* <div className="bg-white d-block d-lg-flex justify-content-between align-items-center w-100">
        <button
          className="navbar-toggler ms-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FontAwesomeIcon icon={faBars} className="stw-green-icon" />
          </span>
        </button>
        <Link className="navbar-brand stw-solutions-logo-box mx-5" to={"/"}>
          <img
            src="STW-Solution-Logo.png"
            alt={`${t("stw_solutions_logo")}`}
            className="w-100"
          />
        </Link>
        <div className="collapse navbar-collapse stw-navlinks-box" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 text-capitalize mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link stw-nav-link my-1 mx-4"
                aria-current="page"
                to="/"
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item dropdown mx-4">
              <a
                className="nav-link dropdown-toggle stw-nav-link my-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                {t("company")}
              </a>
              <ul className="dropdown-menu company-dropdown-menu">
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
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-4 stw-nav-link my-1"
                aria-current="page"
                to="/"
              >
                {t("services")}
              </Link>
            </li>
            <li className="nav-item dropdown mx-4">
              <a
                className="nav-link dropdown-toggle stw-nav-link my-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                {t("projects")}
              </a>
              <ul className="dropdown-menu project-dropdown-menu">
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
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex justify-content-between stw-navbtns-box px-5 mx-5">
          <ButtonPrimary
            classes={["stw-btn-w", "me-2"]}
            children={`${t("contact_us")}`}
          />
          <ButtonOutline
            classes={["stw-btn-w", "me-2"]}
            children={`${t("blog")}`}
          />
          <div className="stw-select-box d-flex align-items-center ps-1">
            <span>
              <FontAwesomeIcon icon={faGlobe} className="stw-green-icon" />
            </span>
            <select
              className="text-uppercase form-select rounded-0"
              aria-label="language options"
              onChange={(event) => onClickLanguageChange(event.target.value)}
            >
              <option defaultValue={`${t("en")}`}>{t("en")}</option>
              <option value={`${t("fr")}`}>{t("fr")}</option>
            </select>
          </div>
        </div>
      </div> */}
      <NavBarLarge />
      <NavBarSmall />
    </nav>
  )
};

export default NavBar;
