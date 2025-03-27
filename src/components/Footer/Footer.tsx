import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container py-5 text-white text-capitalize">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-2">
            <h6 className="fw-bold">{t("about")}</h6>
            <div className="d-flex justify-content-evenly flex-column">
              <Link to="/company">{t("company")}</Link>
              <Link to="#">{t("sustainability")}</Link>
              <Link to="#">{t("partners")}</Link>
              <Link to="#">{t("careers")}</Link>
              <Link to="#">{t("contact")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6 className="fw-bold">{t("solutions")}</h6>
            <div className="d-flex justify-content-evenly flex-column">
              <Link to="#">{t("forestry_solutions")}</Link>
              <Link to="#">{t("waste_management_solutions")}</Link>
              <Link to="#">{t("renewable_energy_solutions")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <h6 className="fw-bold">{t("projects")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <Link to="/projects">{t("our_projects")}</Link>
              <Link to="#">{t("project#1")}</Link>
              <Link to="#">{t("project#2")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <h6 className="fw-bold">{t("insights")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <Link to="#">{t("blog")}</Link>
              <Link to="#">{t("events")}</Link>
              <Link to="#">{t("news")}</Link>
              <Link to="#">{t("projects")}</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Link className="stw-solutions-footer-logo-box" to={"/"}>
              <img
                src="STW-Solution-Logo.png"
                alt={`${t("stw_solutions_logo")}`}
              />
            </Link>
            <div>
              <span className="fs-bold">{t("business_address" + ":")}</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
