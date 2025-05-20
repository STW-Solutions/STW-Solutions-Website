import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ButtonOutline from "../../ButtonOutline/ButtonOutline";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import "./NavBarLarge.css";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../../images/STW-Solution-Logo.png";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBarLarge = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white d-none navbar-lg justify-content-between align-items-center text-capitalize py-1 px-5">
      <Link className="stw-solutions-logo-box mx-lg-5" to={"/"}>
        <img src={logo} alt={`${t("stw_solutions_logo")}`} />
      </Link>
      <div className="d-flex align-items-center mx-2">
        <span>
          <Link
            aria-current="page"
            to="/"
            className="py-1 px-2 px-xl-3 stw-nav-lg-link fw-bold"
          >
            {t("home")}
          </Link>
        </span>
        <div className="dropdown py-1 px-2 px-xl-4">
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
            {/* <li>
              <a className="dropdown-item stw-nav-lg-link" href="">
                {t("sustainability")}
              </a>
            </li> */}
            <li>
              <NavHashLink className="dropdown-item stw-nav-lg-link" to="/#our-partners">
                {t("partners")}
              </NavHashLink>
            </li>
            {/* <li>
              <a className="dropdown-item stw-nav-lg-link" href="#">
                {t("careers")}
              </a>
            </li> */}
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2 mx-xl-4">
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
              <Link
                className="dropdown-item stw-nav-lg-link"
                to="/solutions/solutions-forestry"
              >
                {t("forestry_solutions")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="/solutions/waste-management">
                {t("waste_management_solutions")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item stw-nav-lg-link" to="/solutions/renewable-energy">
                {t("renewable_energy_solutions")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2 mx-xl-4">
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
              <Link to="/project-details/koundi-forest-conservation-project" className="dropdown-item stw-nav-lg-link">
              {t("koundi_conservation_project")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2 mx-xl-4">
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
              <Link className="dropdown-item stw-nav-lg-link" to="/blogs">
                {t("blog")}
              </Link>
            </li>
            {/* <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("events")}
              </Link>
            </li> */}
            {/* <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("news")}
              </Link>
            </li> */}
            {/* <li>
              <Link className="dropdown-item stw-nav-lg-link" to="#">
                {t("podcast")}
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-3 mx-lg-4 px-lg-4 mx-xl-5 py-2 py-lg-0">
        <ButtonPrimary
          classes={["stw-btn-w text-capitalize", "me-2", "mx-1", "w-100"]}
          children={`${t("contact_us")}`}
        />
        <ButtonOutline to="/blogs"
          classes={["stw-btn-width", "me-2", "mx-1"]}
          children={`${t("blog")}`}
        />
        <div className="stw-select-box d-flex align-items-center ps-2">
          <span className="globe-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="globe-icon"
            >
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
            </svg>
          </span>
          <select
            className="text-uppercase form-select rounded-0 px-5 py-2 fw-bold"
            aria-label="language options"
            onChange={(event) => {
              onClickLanguageChange(event.target.value);
            }}
            id="language-options-lg"
            defaultValue={"en"}
          >
            <option value={"en"}>{t("en")}</option>
            {/* <option value={"fr"}>{t("fr")}</option>
            <option value={"de"}>{t("de")}</option> */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBarLarge;
