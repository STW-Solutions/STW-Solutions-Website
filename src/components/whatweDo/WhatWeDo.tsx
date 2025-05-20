import SectionHeading from "../SectionHeading/SectionHeading";
import "./WhatWeDo.css";
import { useTranslation } from "react-i18next";

const WhatWeDo = () => {
  const { t } = useTranslation();

  const impactStatements: string[] = [
    t("preserved_rainforest"),
    t("cultivated_kiri_trees"),
    t("plastic_waste_initiatives"),
    t("regenerative_farming"),
    t("greenhouse_farming"),
  ];

  return (
    <div className="container-fluid pt-0">
      <div className="row mx-md-5 px-md-5">
        <div className="col-12 col-lg-8">
          <SectionHeading heading={t("what_we_do")} parentClasses="mb-4" />
          <div className="d-flex gap-3">
            <div>
              <span className="circle d-block"></span>
            </div>
            <div className="label">
              <h5>{t("forest_conversation_label")}</h5>
              <p>{t("forest_description")}</p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-0">
            <div>
              <span className="circle d-block"></span>
            </div>
            <div className="label">
              <h5>{t("tree_planting")}</h5>
              <p>{t("tree_planting_description")}</p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-0">
            <div>
              <span className="circle d-block"></span>
            </div>
            <div className="label">
              <h5>{t("waste_management_label")}</h5>
              <p>{t("waste_management_description")}</p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-0">
            <div>
              <span className="circle d-block"></span>
            </div>
            <div className="label">
              <h5>{t("sustainable_agriculture_label")}</h5>
              <p>{t("sustainable_agriculture_description")}</p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-0">
            <div>
              <span className="circle d-block"></span>
            </div>
            <div className="label">
              <h5>{t("community_management_label")}</h5>
              <p>{t("community_mgmt_description")}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 my-5 py-lg-5">
          <div className="card-box p-4 rounded-3">
            <div className="">
              <h4>{t("achievement_and_goals")}</h4>
              <p>{t("impact_description")}</p>
            </div>
            <div className="impact-section">
              <h4>{t("our_impact")}</h4>
              <ul className="text-start">
                {impactStatements.map((statement, index) => (
                  <li key={index} className="impact-statement">
                    {statement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-none d-md-block">
        <div className="col-12 col-lg-6 horizontal-line-what pb-3"></div>
        <div className="col-12 col-lg-6"></div>
      </div>
    </div>
  );
};
export default WhatWeDo;
