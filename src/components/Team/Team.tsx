import Card from "../Card/Card";
import team1 from "../../images/team/team1.webp";
import team2 from "../../images/team/team2.webp";
import team3 from "../../images/team/team3.webp";
import team4 from "../../images/team/team4.webp";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useTranslation } from "react-i18next";
import "./Team.css";

interface TeamData {
  imageSrc: string;
  name: string;
  jobTitle: string;
  aboutInfo: string;
}

const Team = () => {
  const { t } = useTranslation();
  const teamData: TeamData[] = [
    {
      imageSrc: team1,
      name: t("john_doe"),
      jobTitle: t("ceo_founder"),
      aboutInfo: t("team_member_about"),
    },
    {
      imageSrc: team2,
      name: t("name_2"),
      jobTitle: t("job_title_2"),
      aboutInfo: t("team_member_about"),
    },
    {
      imageSrc: team3,
      name: t("name_3"),
      jobTitle: t("job_title_3"),
      aboutInfo: t("team_member_about"),
    },
    {
      imageSrc: team4,
      name: t("name_4"),
      jobTitle: t("job_title_4"),
      aboutInfo: t("team_member_about"),
    },
  ];
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
