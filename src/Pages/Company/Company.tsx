import { useTranslation } from "react-i18next";
import image1 from '../../../public/images/image.png';
import image2 from '../../../public/images/image1.png';
import image3 from '../../../public/images/image2.png';
import image4 from '../../../public/images/image3.png';
import './Company.css';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Values from "../../components/values/Values";
import Team from "../../components/Team/Team";
import WhatWeDo from "../../components/whatweDo/WhatWeDo";

const Company = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="container-fluid container-main fade-in">
                <div className="row mx-md-5 px-md-5">
                    <div className="col-md-12 col-lg-6">
                        <h1 className="fw-bold py-5 company-name">{t("company_name")}</h1>
                        <SectionHeading heading={t("our_vision")} position={"left"} />
                        <div className="text-start w-100 vision-description">
                            {t("vision_description")}
                        </div>
                        <div className="text-start margin-top-7rem">
                            <button className="btn p-3 rounded-2 text-white see-projects-btn">{t("see_projects")}</button>
                        </div>
                        <hr className="mb-4 hr-style" />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="d-lg-block d-none margin-top-5rem margin-bottom-4rem">
                            <div className="row ms-5 p-0">
                                <div className="col-md-4 p-0">
                                    <img src={image1} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block slide-in-left company-image" />
                                </div>
                                <div className="col-md-4 p-0 margin-left-neg-0_5rem">
                                    <img src={image2} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block slide-in-right company-image" />
                                </div>
                            </div>
                            <div className="row me-5 margin-top-neg-0_8rem">
                                <div className="col-md-4 p-0">
                                    <img src={image3} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block slide-in-top company-image" />
                                </div>
                                <div className="col-md-4 p-0 margin-left-neg-0_5rem">
                                    <img src={image4} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block slide-in-bottom company-image" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <SectionHeading heading={t("our_mission")} position={"right"} />
                        </div>
                        <div className="text-end">
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