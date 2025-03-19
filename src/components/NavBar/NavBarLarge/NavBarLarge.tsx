import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ButtonOutline from "../../ButtonOutline/ButtonOutline";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";

const NavBarLarge = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white d-none d-md-flex justify-content-between align-items-center w-100">
      <Link className="stw-solutions-logo-box mx-5" to={"/"}>
        <img
          src="STW-Solution-Logo.png"
          alt={`${t("stw_solutions_logo")}`}
          className="w-100"
        />
      </Link>
      <div className="d-flex align-items-center">
        <span>
          <Link aria-current="page" to="/" className="mx-4">
            {t("home")}
          </Link>
        </span>
        <div className="dropdown">
          <button
            className="dropdown-toggle my-1 border-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
            id="companyDropDownLarge"
          >
            {t("company")}
          </button>
          <ul className="dropdown-menu company-dropdown-menu" aria-labelledby="companyDropDownLarge">
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
        <span>
          <Link
            className="active mx-4 stw-nav-link my-1"
            aria-current="page"
            to="/"
          >
            {t("services")}
          </Link>
        </span>
        <div className="dropdown">
          <button
            className="dropdown-toggle stw-nav-link my-1 border-0 bg-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
           type="button"
           id="projectsDropdownLg"
          >
            {t("projects")}
          </button>
          <ul className="dropdown-menu project-dropdown-menu" aria-labelledby="projectsDropdownLg">
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
          >
            <option defaultValue={`${t("en")}`}>{t("en")}</option>
            <option value={`${t("fr")}`}>{t("fr")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBarLarge;
