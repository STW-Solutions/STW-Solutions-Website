import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container py-5 text-white text-capitalize">
        <div className="row">
          <div className="col-md-3">
            <h6>{t("company")}</h6>
            <div className="d-flex justify-content-evenly flex-column">
              <Link to={"/company"}>{t("about_us")}</Link>
              <a href="#">{t("blog")}</a>
              <a href="#">{t("contact_us")}</a>
              <a href="#">{t("our_team")}</a>
            </div>
          </div>
          <div className="col-md-3">
            <h6>{t("services")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <a href="#">{t("service1")}</a>
              <a href="#">{t("service2")}</a>
              <a href="#">{t("service3")}</a>
              <a href="#">{t("service4")}</a>
            </div>
          </div>
          <div className="col-md-3">
            <h6>{t("projects")}</h6>
            <div className="d-flex justify-content-center flex-column">
              <a href="#">{t("projects1")}</a>
              <a href="#">{t("projects2")}</a>
              <a href="#">{t("projects3")}</a>
              <a href="#">{t("projects4")}</a>
            </div>
          </div>
          <div className="col-md-3">
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
