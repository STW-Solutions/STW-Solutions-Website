import SectionHeading from "../SectionHeading/SectionHeading";
import './WhatWeDo.css'
import React from "react";
import team1 from '../../../public/images/team/team1.png';
import team2 from '../../../public/images/team/team2.png';
import team3 from '../../../public/images/team/team3.png';
import {useTranslation} from "react-i18next";
interface TestimonialsData {
    imageSrc: string;
    experience: string;
    name: string;
}

const WhatWeDo = () => {
    const { t } = useTranslation();

    const impactStatements: string[] = [
        t("whatWeDo.impactStatements.preservedRainforest"),
        t("whatWeDo.impactStatements.cultivatedKiriTrees"),
        t("whatWeDo.impactStatements.plasticWasteInitiatives"),
        t("whatWeDo.impactStatements.regenerativeFarming"),
        t("whatWeDo.impactStatements.greenhouseFarming"),
    ];
    const testimonials: TestimonialsData[] = [
        {
            imageSrc: team1,
            experience: t("whatWeDo.testimonialExperience"),
            name: "John Doe",
        },
        {
            imageSrc: team2,
            experience: t("whatWeDo.testimonialExperience"),
            name: "Name 2",
        },
        {
            imageSrc: team3,
            experience: t("whatWeDo.testimonialExperience"),
            name: "Name 3",
        }
    ];

    return (
        <div className="container-fluid container-main ">
            <div className="row mx-md-5 px-md-5">
                <div className="col-md-7">
                    <SectionHeading heading={t("whatWeDo.heading")} position={"left"}/>
                    <div className="d-flex gap-3">
                        <div className="circle"></div>
                        <div className="label d-flex flex-column align-items-start">
                            <h5>{t("whatWeDo.forestConversationLabel")}</h5>
                            <p>{t("whatWeDo.description")}</p>
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-0">
                        <div className="circle"></div>
                        <div className="label d-flex flex-column align-items-start">
                            <h5>{t("whatWeDo.forestConversationLabel")}</h5>
                            <p>{t("whatWeDo.description")}</p>
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-0">
                        <div className="circle"></div>
                        <div className="label d-flex flex-column align-items-start">
                            <h5>{t("whatWeDo.wasteManagementLabel")}</h5>
                            <p>{t("whatWeDo.description")}</p>
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-0">
                        <div className="circle"></div>
                        <div className="label d-flex flex-column align-items-start">
                            <h5>{t("whatWeDo.sustainableAgricultureLabel")}</h5>
                            <p>{t("whatWeDo.description")}</p>
                        </div>
                    </div>
                    <div className="d-flex gap-3 mt-0">
                        <div className="circle"></div>
                        <div className="label d-flex flex-column align-items-start">
                            <h5>{t("whatWeDo.communityManagementLabel")}</h5>
                            <p>{t("whatWeDo.description")}</p>
                        </div>
                    </div>
                    <hr className="mb-4 w-50" style={{color: "#257251", borderColor: "#257251", borderWidth: 2}}/>

                </div>
                <div className="col-md-5 my-5 py-5">
                    <div className="card-box p-4 rounded-3">
                        <div className="">
                            <h4>{t("whatWeDo.achievementAndGoals")}</h4>
                            <p>
                                {t("whatWeDo.impactDescription")}
                            </p>
                        </div>
                        <div className="impact-section">
                            <h4>{t("whatWeDo.ourImpact")}</h4>
                            <ul className="text-start">
                                {impactStatements.map((statement, index) => (
                                    <li key={index} className="impact-statement">{statement}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <SectionHeading heading={t("whatWeDo.testimonialsHeading")} position={'left'}/>
                <p className="ms-5">{t("whatWeDo.testimonialsDescription")}</p>
                <div className="row px-5 mx-5">
                    {testimonials.map((team, index) => (
                        <div key={index} className="col-md-3 testimonial-item">
                            <div className="testimonial-img-container">
                                <img src={team.imageSrc} alt={team.name} className="img-fluid rounded-circle mb-4 testimonial-image" />
                            </div>
                            <div className="text-start">
                                <p className="">{team.experience}</p>
                                <h5 className="">- {team.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )

}
export default WhatWeDo;