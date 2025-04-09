import { useTranslation } from "react-i18next";
import image1 from "../../images/company/image1.webp";
import image2 from "../../images/company/image.webp";
import image3 from "../../images/company/image2.webp";
import image4 from "../../images/company/image3.webp";
import "./Company.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Values from "../../components/values/Values";
import Team from "../../components/Team/Team";
import WhatWeDo from "../../components/whatweDo/WhatWeDo";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const Company = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
    <Helmet>
        <title>{t("about_page")} - STW-Solutions Ltd</title>
        <meta name="home" content={t("meta_company")} />
      </Helmet>
      <div className="container-fluid container-main">
        <div className="row mx-md-5 px-md-5">
          <div className="col-12 col-lg-7 me-auto">
            <h1 className="stw-solutions-h1 py-3 py-lg-5">
              <span className="text-capitalize">{t("about")}</span>{" "}
              {t("company_name")}
            </h1>
            <SectionHeading heading={t("our_vision")} parentClasses="ml-5" />
            <div className="w-100 vision-description mt-4">
              {t("vision_description1")}
              <br />
              {t("vision_description2")}
            </div>
            <div className="text-start mt-5 pt-lg-5">
              <ButtonPrimary
                children={t("see_our_projects")}
                classes={["w-50 fw-bold py-2"]}
                onButtonClick={handleClick}
              />
            </div>
          </div>
          <div className="d-none d-lg-block col-md-12 col-lg-5">
            <div className="margin-top-5rem margin-bottom-4rem">
              <div className="row ms-5 p-0">
                <div className="col-md-4 p-0">
                  <img
                    src={image1}
                    alt="Company Image"
                    className="img-fluid mx-auto d-block slide-in-left company-image"
                  />
                </div>
                <div className="col-md-4 p-0 margin-left-neg-0_5rem">
                  <img
                    src={image2}
                    alt="Company Image"
                    className="img-fluid mx-auto d-block slide-in-right company-image"
                  />
                </div>
              </div>
              <div className="row me-5 margin-top-neg-0_8rem">
                <div className="col-md-4 p-0">
                  <img
                    src={image3}
                    alt="Company Image"
                    className="img-fluid mx-auto d-block slide-in-top company-image"
                  />
                </div>
                <div className="col-md-4 p-0 margin-left-neg-0_5rem">
                  <img
                    src={image4}
                    alt="Company Image"
                    className="img-fluid rounded-circle mx-auto d-block slide-in-bottom company-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-sm-3 mx-md-5 px-md-5">
          <div className="d-none d-lg-block col-12 col-md-5 horizontal-line"></div>
          <div className="col-sm-2 d-none d-sm-block d-lg-none"></div>
          <div className="mt-5 mt-lg-0 col-12 col-sm-10 col-lg-7 mission-section text-sm-end text-lg-start">
            <SectionHeading
              heading={t("our_mission")}
              parentClasses="text-sm-center"
              skewLineClasses="mx-0 mx-sm-auto"
            />
            <div className="mission-description mt-4">
              {t("mission_description")}
            </div>
          </div>
        </div>
      </div>
      <Values />
      <Team />
      <WhatWeDo />
    </>
  );
};

export default Company;
