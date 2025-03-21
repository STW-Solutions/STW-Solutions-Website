import Card from "../Card/Card";
import team1 from '../../../public/images/team/team1.png';
import team2 from '../../../public/images/team/team2.png';
import team3 from '../../../public/images/team/team3.png';
import team4 from '../../../public/images/team/team4.png';
import SectionHeading from "../SectionHeading/SectionHeading";
import {useTranslation} from "react-i18next";

interface TeamData {
    imageSrc: string;
    name: string;
    jobTitle: string;
    aboutInfo: string;
}

const Team = () => {
    const {t} = useTranslation()
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
        <div className="container-fluid container-main">
            <div>
                <SectionHeading heading={t("our_team")} position={'left'}/>
            </div>
            <div className="row mx-md-5 px-md-5">
                {teamData.map((team, index) => (
                    <div key={index} className="col-md-3 d-flex justify-content-center">
                        <Card
                            cardType="team"
                            imageSrc={team.imageSrc}
                            name={team.name}
                            jobTitle={team.jobTitle}
                            aboutInfo={team.aboutInfo}
                        />
                    </div>
                ))}
            </div>
            <hr className="mb-4 w-50" style={{color: "#257251", borderColor: "#257251", borderWidth: 3}}/>
        </div>
    )
}
export default Team;