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

const Company = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className="container-fluid container-main fade-in">
        <div className="row mx-md-5 px-md-5">
          <div className="col-md-12 col-lg-6">
            <h1 className="fw-bold py-5 company-name">
              <span className="text-capitalize">{t("about")}</span>{" "}
              {t("company_name")}
            </h1>
            <SectionHeading heading={t("our_vision")} position={"left"} />
            <div className="text-start w-100 vision-description">
              {t("vision_description1")}
              <br />
              {t("vision_description2")}
            </div>
            <div className="text-start margin-top-7rem">
              <ButtonPrimary
                children={t("see_our_projects")}
                classes={["w-50 fw-bold"]}
                onButtonClick={handleClick}
              />
            </div>
            <div className="horizontal-line"></div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="d-lg-block d-none margin-top-5rem margin-bottom-4rem">
              <div className="row ms-5 p-0">
                <div className="col-md-4 p-0">
                  <img
                    src={image1}
                    alt="Company Image"
                    className="img-fluid rounded-circle mx-auto d-block slide-in-left company-image"
                  />
                </div>
                <div className="col-md-4 p-0 margin-left-neg-0_5rem">
                  <img
                    src={image2}
                    alt="Company Image"
                    className="img-fluid rounded-circle mx-auto d-block slide-in-right company-image"
                  />
                </div>
              </div>
              <div className="row me-5 margin-top-neg-0_8rem">
                <div className="col-md-4 p-0">
                  <img
                    src={image3}
                    alt="Company Image"
                    className="img-fluid rounded-circle mx-auto d-block slide-in-top company-image"
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
            <div className="mx-auto w-50">
              <SectionHeading heading={t("our_mission")} />
            </div>
            <div className="text-end text-lg-start mission-description">
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
