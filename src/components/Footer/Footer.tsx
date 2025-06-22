import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/STW-Solution-Logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container-fluid footer-main pt-2 pt-md-5 pb-2 text-white text-capitalize">
        <div className="row mt-3 upper-footer">
          <div className="col-12 col-sm-6 col-md-2 footer-col">
            <h6 className="fw-bold">{t("about")}</h6>
            <div className="d-flex justify-content-evenly flex-column text-muted">
              <Link to="/company">{t("company")}</Link>
              {/* <Link to="#">{t("sustainability")}</Link> */}
              <HashLink to="/#our-partners">{t("partners")}</HashLink>
              {/* <Link to="#">{t("careers")}</Link> */}
              <Link to="/contact-us">{t("contact")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 footer-col">
            <h6 className="fw-bold">{t("solutions")}</h6>
            <div className="d-flex justify-content-evenly flex-column">
              <Link to="/solutions/forestry">{t("forestry")}</Link>
              <Link to="/solutions/waste-management">{t("waste_management")}</Link>
              <Link to="/solutions/renewable-energy">{t("renewable_energy")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 footer-col">
            <h6 className="fw-bold">{t("projects")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <Link to="/projects">{t("our_projects")}</Link>
                <Link to="/project-details/koundi-forest-conservation-project" className="specific-project fw-bold">
                  {t("koundi_conservation_project_long")}
                </Link>
                <Link to="/project-details/kpawara-community-forest-restoration-project" className="specific-project fw-bold">
                  {t("kpawara_community_forest_restoration_project")}
                </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 footer-col">
            <h6 className="fw-bold">{t("insights")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <Link to="/blogs">{t("blog")}</Link>
              {/* <Link to="#">{t("events")}</Link>
              <Link to="#">{t("news")}</Link>
              <Link to="#">{t("podcast")}</Link> */}
            </div>
          </div>
          <div className="col-12 col-md-3 stw-solutions-footer-logo-box order-first order-md-last">
            <Link className="" to={"/"}>
              <img
                src={logo}
                alt={`${t("stw_solutions_logo")}`}
              />
            </Link>
            <div className="py-3 contact">
              <span>
                <span className="fw-bold pe-1">
                  {t("business_address") + ":"}
                </span>
                {"Carrefour Moussa, Odza 2, BP 31191"}
                <br />
                {"Yaounde, Cameroon"}
              </span>
              <div className="d-flex">
                <span className="fw-bold">{t("phone") + ":"}</span>
                <span className="ps-1">
                  {"+237 675 529 171"}
                  <br />
                  {"+237 677 742 214"}
                </span>
              </div>
              <div className="d-flex">
                <span className="fw-bold">{t("email") + ":"}</span>
                <span className="text-lowercase ps-1">
                  {"info@stw-solution.com"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="row">
            <div className="col-md-3 social-icon d-flex justify-content-center justify-content-md-start">
              <Link
                to="https://www.linkedin.com/company/stw-solutions-ltd/"
                target="_blank"
                className="svg-icon-box"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="ln-icon"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/stwsolutions/"
                target="_blank"
                className="svg-icon-box ms-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="insta-icon"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
            </div>
            <div className="col-md-6 rights-reserved-box text-center">
              <small>{t("rights_reserved")}</small>
            </div>
            <div className="col-md-3 last-line d-none d-md-block"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
