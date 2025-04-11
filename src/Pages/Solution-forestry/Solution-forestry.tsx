import bgImage from "../../images/service-bg.png";
import {useTranslation} from "react-i18next";
import "./Solution-forestry.css"
import earthImg from "../../images/earth.svg"
import climate from "../../images/climate-change.png"
import plant from "../../images/plant.png"
import agriImg from "../../images/agri-management.jpg"
import { useEffect } from "react";

const SolutionForestry = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const { t } = useTranslation();
    const cardData = [
        {
            title: "Agriculture",
            imgSrc: agriImg,
            description: "Production and profit with the use of the low cost",
            linkText: t("learn_more"),
            altText: t("forest_img"),
        }
    ];


    return(
        <div className="container-fluid container-fluid-service">
            <div
                className="services-container"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="row">
                    <div className="col-md-6 text-white d-flex align-items-center justify-content-center">
                        <h1 className="text-md-start text-center p-5 header">
                            {t("solution_forestry_header_1")}
                        </h1>
                    </div>
                    <div className="col-md-6 d-flex align-items-end justify-content-end d-none d-lg-flex">
                        <div className="info-card d-flex align-items-center">
                            <div className="info-item text-center">
                                <h1 className="fw-bolder">12 +</h1>
                                <p>{t("projects_done")}</p>
                            </div>
                            <div className="info-item text-center">
                                <h1 className="fw-bolder">600</h1>
                                <p>{t("trees_planted")}</p>
                            </div>
                            <div className="info-item text-center">
                                <h1 className="fw-bolder">+ 600 Ha</h1>
                                <p>{t("forest_preserved")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 mx-5 mt-4">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="">
                        <div className="py-5">
                            <h2 className="fw-bolder fs-2 header-2-text ">
                                {t("our_forestry_sol")}
                                <p>{t("for_your_business")}</p>
                            </h2>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <a className="btn btn-call p-2 text-white fs-5" href="#">{t("call_to_action")}</a>
                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-1 me-5">
                                <img src={earthImg} width="80" className="" alt={t("earth_conservation_image")}/>
                            </div>
                            <div className="col-9">
                                <h4 className="fw-bold"><span></span>{t("forest_conservation_initiatives")}</h4>
                                <span className="text-muted svg-text-1">
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum
                        nt here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>
                            </div>
                        </div>                </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-1 me-5">
                                <img src={climate} width="80" className="" alt={t("earth_conservation_image")}/>
                            </div>
                            <div className="col-9">
                                <h4 className="fw-bold">{t("improved_forest_management_practices")}</h4>
                                <span className="text-muted svg-text-1">
                        It is a long established fact that a reader will be distracted by the readable to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-1 me-5">
                                <img src={plant} width="80" className="" alt={t("earth_conservation_image")}/>
                            </div>
                            <div className="col-9">
                                <h4 className="fw-bold">
                                    {t("paulownia_tomentosa_tree_planting")}</h4>
                                <span className="text-muted svg-text-1">
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content hes their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row box-margin-top mb-3">
                    <div className="col-md-6 py-5 buttom-page">
                        <p className="text-white text-large">
                            {t("explore_our")}
                            <br/>
                            <span>{t("top_forestry_projects")}</span>
                            <div className="my-5">
                                <a className="btn bg-light text-success p-4 fs-5" href="#">{t("tell_us_about")}</a>
                            </div>
                        </p>
                    </div>
                    <div className="col-md-6 bg-white justify-content-center align-items-center px-5 py-5">
                        {cardData.map((card, index) => (
                            <div key={index} className="row py-3 px-3 card-width shadow justify-content-center align-items-center">
                                <h3 className="text-center title-color fw-bolder">{card.title}</h3>
                                <div className="col-md-6">
                                    <img src={card.imgSrc} className="w-100" height="120" alt={card.altText} />
                                </div>
                                <div className="col-md-6">
                                    <p className="fs-5 text-center">{card.description}</p>
                                    <div>
                                        <a className="btn btn-call text-white p-1" href="#">{card.linkText}</a>
                                    </div>
                                </div>
                            </div>
                        ))}                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionForestry;