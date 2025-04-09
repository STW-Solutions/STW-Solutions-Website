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
              <span className="bars-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="bars-icon">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
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
                          className="dropdown-item border-0 stw-nav-sm-li globe-icon-box"
                          type="button"
                          onClick={() => onClickLanguageChange(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="globe-icon-sm me-2"
                          >
                            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                          </svg>

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
                  classes={["stw-btn-w text-capitalize", "me-2", "w-100"]}
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
          <Link
            className="stw-solutions-logo-sm-box col-3 d-flex justify-content-center"
            to={"/"}
          >
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
