import React, { useState } from 'react';
import bgImage from '../../../public/images/service-bg.png';
import serviceImg from '../../../public/images/service1.png';
import value1 from '../../../public/images/service3.png';
import { useTranslation } from "react-i18next";
import value2 from "../../../public/images/values/value2.png";
import value3 from "../../../public/images/values/value3.png";
import value4 from "../../../public/images/values/value4.png";
import svg1 from '../../../public/images/img.png';
import svg2 from '../../../public/images/img_1.png';
import svg3 from '../../../public/images/img_2.png';
import './Services.css';


interface CardInfo {
    imageSrc: string;
    title: string;
    backgroundColor: string;
    information: string;
    intro?: string;
}

const Services = () => {
    const { t } = useTranslation();
    const [modalData, setModalData] = useState<CardInfo | null>(null);

    const data: CardInfo[] = [
        {
            imageSrc: value1,
            title: t("agricultureTitle"),
            backgroundColor: "#FFFFFF",
            information: t("agricultureInfo"),
            intro: t("agricultureIntro")
        },
        {
            imageSrc: value2,
            title: t("wasteManagementTitle"),
            backgroundColor: "#B7EDD6",
            information: t("values.responsibilityInfo"),
        },
        {
            imageSrc: value3,
            title: t("forestTitle"),
            backgroundColor: "#FFFFFF",
            information: t("values.trustInfo"),
        },
        {
            imageSrc: value4,
            title: t("educationTitle"),
            backgroundColor: "#B7EDD6",
            information: t("values.socialImpactInfo"),
        },
    ];

    const handleCardClick = (card: CardInfo) => {
        setModalData(card);
    };

    return (
        <div className="container-fluid">
            <div className="services-container" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="row">
                    <div className="col-md-6 text-white d-flex align-items-center justify-content-center">
                        <h1 className="text-md-start text-center fw-medium p-5 header">{t("header")}</h1>
                    </div>
                    <div className="col-md-6 d-flex align-items-end justify-content-end d-none d-md-flex">
                        <div className="info-card d-flex align-items-center">
                            <div className="info-item text-center">
                                <h1 className="fw-bolder">12 +</h1>
                                <p>{t("projectsDone")}</p>
                            </div>
                            <div className="info-item text-center">
                                <h1 className="fw-bolder">600</h1>
                                <p>{t("treesPlanted")}</p>
                            </div>
                            <div className="info-item text-center">
                                <h1 className="fw-bolder">+ 600 Ha</h1>
                                <p>{t("forestPreserved")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <h2 className="fw-light section-head-text text-center">{t("sectionHeading")}</h2>
                <div className="head-bottom-line"></div>
            </div>
            <div className="row mx-md-5 px-md-5">
                {data.map((card, index) => (
                    <div className="col-md-4" key={index} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div
                            className="card shadow card-info p-4"
                            onClick={() => handleCardClick(card)}
                            style={{cursor: 'pointer'}}
                        >
                            <div>
                                <img src={serviceImg} alt={card.title} className="card-image img-fluid rounded mb-4"/>
                            </div>
                            <div className="">
                                <h3 className="text-center text-success py-1">{card.title}</h3>
                                <p className="py-3">{card.information}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container bg-white py-5 rounded-5 bg-white-container" >
                <h2 className="text-center">{t("howItWorks")}</h2>
                <hr className="my-4 hr-class"  />
                <div className="row mb-4">
                    <div className="col-md-3">
                        <img src={svg1} alt="Image 1" width="240" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h5 >{t("chooseService")}</h5>
                        <div>{t("chooseServiceDescription")}</div>
                    </div>
                </div>
                <hr className="my-4 hr-class"  />
                <div className="row mb-4">
                    <div className="col-md-3">
                        <img src={svg2} alt="Image 2" width="190" className="img-fluid p-2 mx-4" />
                    </div>
                    <div className="col-md-9">
                        <h5 >{t("tellUsAboutProject")}</h5>
                        <p>{t("tellUsAboutProjectDescription")}</p>
                    </div>
                </div>
                <hr className="my-4 hr-class" />
                <div className="row mb-4">
                    <div className="col-md-3">
                        <img src={svg3} alt="Image 3" width="170" className="img-fluid p-2 mx-4" />
                    </div>
                    <div className="col-md-9">
                        <h5 >{t("weTakeItFromHere")}</h5>
                        <p>{t("weTakeItFromHereDescription")}</p>
                    </div>
                </div>
            </div>

            {modalData && (
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h3 className="text-center mod-title p-3">{modalData.title}</h3>
                                <div className="d-flex justify-content-center align-items-center align-content-center ">
                                    <img src={modalData.imageSrc} alt={modalData.title} width="350"
                                         className="img-fluid rounded mb-4"/>
                                </div>
                                <div className=" p-4">
                                    <span>{modalData.intro}</span>
                                </div>
                                <div className="modal-body" style={{backgroundColor: modalData.backgroundColor}}>
                                    <div className="centered-div float-end">
                                        <button className="btn btn-success p-2  centered-btn m-3">{t("getInvolved")}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;