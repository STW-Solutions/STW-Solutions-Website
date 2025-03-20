import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ButtonOutline from "../../ButtonOutline/ButtonOutline";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import "./NavBarLarge.css";

const NavBarLarge = () => {
  const { t } = useTranslation();
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
          <Link aria-current="page" to="/" className="py-1 px-2 px-lg-3 stw-nav-lg-link fw-bold">
            {t("home")}
          </Link>
        </span>
        <div className="dropdown py-1 px-2 px-lg-3">
          <button
            className="dropdown-toggle my-1 border-0 text-capitalize bg-white fw-bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
            id="companyDropDownLarge"
          >
            {t("company")}
          </button>
          <ul className="dropdown-menu company-dropdown-menu" aria-labelledby="companyDropDownLarge">
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
            className="stw-nav-lg-link py-1 px-2 px-lg-3 fw-bold"
            aria-current="page"
            to="/"
          >
            {t("services")}
          </Link>
        </span>
        <div className="dropdown mx-2 mx-lg-3">
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
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("category1")}
              </a>
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
        <div className="stw-select-box d-flex align-items-center ps-1">
          <span>
            <FontAwesomeIcon icon={faGlobe} className="stw-green-icon" />
          </span>
          <select
            className="text-uppercase form-select rounded-0 px-5 py-2"
            aria-label="language options"
          >
            <option defaultValue={`${t("en")}`} className="language-option">{t("en")}</option>
            <option value={`${t("fr")}`} className="language-option">{t("fr")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBarLarge;
