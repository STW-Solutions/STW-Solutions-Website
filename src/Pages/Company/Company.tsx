import {useTranslation} from "react-i18next";
import image1 from '../../../public/images/image.png'
import image2 from '../../../public/images/image1.png'
import image3 from '../../../public/images/image2.png'
import image4 from '../../../public/images/image3.png'
import './Company.css'
import SectionHeading from "../../components/SectionHeading/SectionHeading";


const Company = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="container-fluid container-main ">
                <div className="row px-5 mx-5">
                    <div className="col-md-6">
                        <h1 className="fw-bold py-5" style={{color:"#257251"}}>{t("company.companyName")}</h1>
                        <SectionHeading heading={t("company.ourVision")} position={"left"}/>
                        <div className="text-start w-100" style={{color:"#1E1E1E"}} dangerouslySetInnerHTML={{ __html: t("company.visionDescription") }}>
                        </div>
                        <div className="text-start" style={{ marginTop: "7rem"}}>
                            <button className="btn p-3 rounded-2 text-white" style={{backgroundColor:"#257251"}}>{t("company.seeProjects")}</button>
                        </div>
                        <hr className="mb-4 " style={{marginTop: "23rem",  border: "1px solid #9db2e1"}}/>
                    </div>
                    <div className="col-md-6 ">
                        <div className="d-md-block d-none" style={{ marginTop: "5rem", marginBottom: "4rem"}}>
                            <div className="row ms-5 p-0">
                                <div className="col-md-4 p-0">
                                    <img src={image1} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block" style={{width:"30rem", height:"auto"}}/>
                                </div>
                                <div className="col-md-4 p-0" style={{marginLeft: "-0.5rem"}}>
                                    <img src={image2} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block" style={{width:"30rem", height:"auto"}}/>
                                </div>
                            </div>
                            <div className="row me-5" style={{marginTop: "-0.8rem"}}>
                                <div className="col-md-4 p-0">
                                    <img src={image3} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block" style={{width:"30rem", height:"auto"}}/>
                                </div>
                                <div className="col-md-4 p-0" style={{marginLeft: "-0.5rem"}}>
                                    <img src={image4} alt="Company Image" className="img-fluid rounded-circle mx-auto d-block" style={{width:"30rem", height:"auto"}}/>
                                </div>
                            </div>
                        </div>
                        {/*make the code below responsive on small screen*/}
                        <div className="">
                            <SectionHeading heading={t("company.ourMission")} position={"right"}/>
                        </div>
                        <div className="text-start" dangerouslySetInnerHTML={{ __html: t("company.missionDescription") }}>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Company;