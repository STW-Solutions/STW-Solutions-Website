import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./NavBar.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBar = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="bg-white container-fluid px-5 mx-5">
        <Link className="navbar-brand stw-solutions-logo-box mx-5" to={"/"}>
          <img
            src="STW-Solution-Logo.png"
            alt={`${t("stw_solutions_logo")}`}
            className="w-100"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 text-capitalize mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link mx-5 stw-nav-link my-1"
                aria-current="page"
                to="/"
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item dropdown mx-5">
              <a
                className="nav-link dropdown-toggle stw-nav-link my-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                {t("company")}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    {t("about_us")}
                  </a>
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
                className="nav-link active mx-5 stw-nav-link my-1"
                aria-current="page"
                to="/"
              >
                {t("services")}
              </Link>
            </li>
            <li className="nav-item dropdown mx-5">
              <a
                className="nav-link dropdown-toggle stw-nav-link my-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                {t("projects")}
              </a>
              <ul className="dropdown-menu">
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
          <div className="d-flex w-100">
            <span className="w-25 me-2">
            <ButtonPrimary children={`${t("contact_us")}`} />
            </span>
            <span className="w-25 me-2">
            <ButtonOutline children={`${t("blog")}`} />
            </span>
            
            {/* <button
              type="button"
              className="btn btn-primary"
              onClick={() => onClickLanguageChange("en")}
            >
              {t("english")}
            </button>
            <button
              type="button"
              className="ms-2 btn btn-secondary"
              onClick={() => onClickLanguageChange("fr")}
            >
              {t("french")}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
