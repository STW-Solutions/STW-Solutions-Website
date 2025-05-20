import SectionHeading from "../SectionHeading/SectionHeading";
import { useTranslation } from "react-i18next";
import "./Team.css";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid container-main py-5">
      <div className="row mx-md-5 px-md-5">
        <SectionHeading heading={t("our_team")} parentClasses="text-capitalize" />
        <div className="col-12 col-lg-8 pb-3">
            <h3 className="mt-5 mb-4 fs-2 fw-bold">{t("you_are_in_good_company")}</h3>
            <p>{t("team_description_1")}</p>
            <p>{t("team_description_2")}</p>
            <p>{t("team_description_3")}</p>
            <p>{t("team_description_4")}</p>
        </div>
        <div className="col-12 col-lg-4"></div>
      </div>
      <div className="row d-none d-md-block">
        <div className="col-12 col-lg-6 horizontal-line-team pb-3"></div>
        <div className="col-12 col-lg-6"></div>
      </div>
    </div>
  );
};
export default Team;
