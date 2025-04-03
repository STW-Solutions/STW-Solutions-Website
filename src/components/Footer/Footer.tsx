import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container-fluid footer-main pt-2 pt-md-5 pb-2 text-white text-capitalize">
        <div className="row mt-3 upper-footer">
          <div className="col-12 col-sm-6 col-md-2 footer-col">
            <h6 className="fw-bold">{t("about")}</h6>
            <div className="d-flex justify-content-evenly flex-column text-muted">
              <Link to="/company">
                {t("company")}
              </Link>
              <Link to="#">{t("sustainability")}</Link>
              <Link to="#">{t("partners")}</Link>
              <Link to="#">{t("careers")}</Link>
              <Link to="#">{t("contact")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 footer-col">
            <h6 className="fw-bold">{t("solutions")}</h6>
            <div className="d-flex justify-content-evenly flex-column">
              <Link to="#">{t("forestry_solutions")}</Link>
              <Link to="#">{t("waste_management_solutions")}</Link>
              <Link to="#">{t("renewable_energy_solutions")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 footer-col">
            <h6 className="fw-bold">{t("projects")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <Link to="/projects">{t("our_projects")}</Link>
              <Link to="#">{t("project#1")}</Link>
              <Link to="#">{t("project#2")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 footer-col">
            <h6 className="fw-bold">{t("insights")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <Link to="#">{t("blog")}</Link>
              <Link to="#">{t("events")}</Link>
              <Link to="#">{t("news")}</Link>
              <Link to="#">{t("projects")}</Link>
            </div>
          </div>
          <div className="col-12 col-md-3 stw-solutions-footer-logo-box order-first order-md-last">
            <Link className="" to={"/"}>
              <img
                src="STW-Solution-Logo.png"
                alt={`${t("stw_solutions_logo")}`}
              />
            </Link>
            <div className="py-3 contact">
              <span>
                <span className="fw-bold pe-1">{t("business_address") + ":"}</span>
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
              <Link to="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link to="#" className="px-4">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
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
