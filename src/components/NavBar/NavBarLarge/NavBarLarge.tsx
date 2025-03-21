import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ButtonOutline from "../../ButtonOutline/ButtonOutline";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import "./NavBarLarge.css";
import { useState } from "react";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBarLarge = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  return (
    <div className="bg-white d-none d-md-flex justify-content-between align-items-center w-100 text-capitalize py-1 px-5">
      <Link className="stw-solutions-logo-box mx-lg-5" to={"/"}>
        <img
          src="STW-Solution-Logo.png"
          alt={`${t("stw_solutions_logo")}`}
          className="w-100"
        />
      </Link>
      <div className="d-flex align-items-center mx-2">
        <span>
          <Link
            aria-current="page"
            to="/"
            className="py-1 px-2 px-lg-5 stw-nav-lg-link fw-bold"
          >
            {t("home")}
          </Link>
        </span>
        <div className="dropdown py-1 px-2 px-lg-5">
          <button
            className="dropdown-toggle my-1 border-0 text-capitalize bg-white fw-bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
            id="companyDropDownLarge"
          >
            {t("company")}
          </button>
          <ul
            className="dropdown-menu company-dropdown-menu"
            aria-labelledby="companyDropDownLarge"
          >
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to={"/company"}>
                {t("about_us")}
              </Link>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("our_team")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("recent_projects")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("partners")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("how_it_works")}
              </a>
            </li>
          </ul>
        </div>
        <span>
          <Link
            className="stw-nav-lg-link py-1 px-2 px-lg-5 fw-bold"
            aria-current="page"
            to="/services"
          >
            {t("services")}
          </Link>
        </span>
        <div className="dropdown mx-2 mx-lg-5">
          <button
            className="dropdown-toggle my-1 border-0 bg-white text-capitalize fw-bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
            id="projectsDropdownLg"
          >
            {t("projects")}
          </button>
          <ul className="dropdown-menu" aria-labelledby="projectsDropdownLg">
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="/projects">
                {t("category1")}
              </Link>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("category2")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("category3")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-lg-5 px-5 px-lg-0 py-2 py-lg-0">
        <ButtonPrimary
          classes={["stw-btn-w", "me-2", "mx-1", "w-100"]}
          children={`${t("contact_us")}`}
        />
        <ButtonOutline
          classes={["stw-btn-width", "me-2", "mx-1"]}
          children={`${t("blog")}`}
        />
        <div className="stw-select-box d-flex align-items-center ps-2">
          <span>
            <FontAwesomeIcon icon={faGlobe} className="stw-green-icon fw-bold" />
          </span>
          <select
            className="text-uppercase form-select rounded-0 px-5 py-2 fw-bold"
            aria-label="language options"
            onChange={(event) => {
              setSelectedLanguage(event.target.value);
              onClickLanguageChange(event.target.value);
            }}
            id="language-options-lg"
            defaultValue={"en"}
            value={selectedLanguage}
          >
            <option value={"en"}>{t("en")}</option>
            <option value={"fr"}>{t("fr")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBarLarge;
