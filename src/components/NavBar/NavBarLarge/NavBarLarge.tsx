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
            {t("about")}
          </button>
          <ul
            className="dropdown-menu company-dropdown-menu"
            aria-labelledby="companyDropDownLarge"
          >
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to={"/company"}>
                {t("company")}
              </Link>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("sustainability")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("partners")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("careers")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2 mx-lg-5">
          <button
            className="dropdown-toggle my-1 border-0 bg-white text-capitalize fw-bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
            id="solutionsDropdownLg"
          >
            {t("solutions")}
          </button>
          <ul className="dropdown-menu" aria-labelledby="solutionsDropdownLg">
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("forestry_solutions")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("waste_management_solutions")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("renewable_energy_solutions")}
              </Link>
            </li>
          </ul>
        </div>
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
                {t("our_projects")}
              </Link>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("Project#1")}
              </a>
            </li>
            <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("Project#2")}
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2 mx-lg-5">
          <button
            className="dropdown-toggle my-1 border-0 bg-white text-capitalize fw-bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
            id="insightsDropdownLg"
          >
            {t("insights")}
          </button>
          <ul className="dropdown-menu" aria-labelledby="insightsDropdownLg">
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("events")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("news")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("podcast")}
              </Link>
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
            <option value={"de"}>{t("de")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBarLarge;
