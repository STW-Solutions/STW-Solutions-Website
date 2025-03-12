import Card from "../../components/Card/Card";
import team1 from '../../../public/images/team/team1.png';
import team2 from '../../../public/images/team/team2.png';
import team3 from '../../../public/images/team/team3.png';
import team4 from '../../../public/images/team/team4.png';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
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
            name: t("team.johnDoe"),
            jobTitle: t("team.ceoFounder"),
            aboutInfo: t("team.teamMemberAbout"),
        },
        {
            imageSrc: team2,
            name: t("team.name2"),
            jobTitle: t("team.jobTitle2"),
            aboutInfo: t("team.teamMemberAbout"),
        },
        {
            imageSrc: team3,
            name: t("team.name3"),
            jobTitle: t("team.jobTitle3"),
            aboutInfo: t("team.teamMemberAbout"),
        },
        {
            imageSrc: team4,
            name: t("team.name4"),
            jobTitle: t("team.jobTitle4"),
            aboutInfo: t("team.teamMemberAbout"),
        },
    ];
    return (
        <div className="container-fluid container-main">
            <div>
                <SectionHeading heading={t("team.ourTeam")} position={'left'}/>
            </div>
            <div className="row px-5 mx-5">
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