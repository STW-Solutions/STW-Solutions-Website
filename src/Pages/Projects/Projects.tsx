import firstImg from '../../assets/project1.png'
import secondImg from '../../assets/project2.png'
import thirdImg from '../../assets/project3.png'
import icon from '../../assets/Arrow-right-circle.png'
import biomassImg from '../../assets/biomassImg.png'
import wasteManagement from '../../assets/waste-management.webp'
import React, {useState} from "react";
import agriImg from '../../assets/agri-management.jpg'
import './Projects.css'
import { useTranslation } from "react-i18next";

interface Project {
    imgSrc: string;
    title: string;
    explanation: string;
    backgroundColor: string;
}

const projectData: Project[] = [
    {
        imgSrc: biomassImg,
        title: "biomass storage with solar",
        explanation: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        backgroundColor: "#FFFFFF"
    },
    {
        imgSrc: wasteManagement,
        title: "plastic waste management",
        explanation: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        backgroundColor: "#FFFFFF"
    },
    {
        imgSrc: agriImg,
        title: "sustainable agriculture",
        explanation: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        backgroundColor: "#FFFFFF"
    }
];
const Projects = () => {
    const { t } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="rounded-4  project-container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                        <h2 className="fw-bold text-white py-md-4">{t("projects")}</h2>
                        <p className="text-white px-md-5 mx-md-5">{t("stw_solutions_is_a")}</p>
                    </div>
                    <div className="pt-5 col-lg-6 col-md-12 col-sm-12 text-center align-content-center d-lg-block  d-none">
                        <img src={firstImg} alt="image 1"  width="75" height="75" className="  img-fluid rounded mb-4" />
                        <img src={secondImg} alt="image 1"  width="115" height="115" className=" img-fluid rounded mb-4" />
                        <span className="border-danger">
                       <img src={thirdImg} alt="image 1" width="130" height="130" className=" img-fluid rounded mb-4" />
                   </span>
                        <img src={secondImg} alt="image 1"  width="115" height="115" className="img-fluid rounded mb-4" />
                        <img src={firstImg} alt="image 1"  width="75" height="75" className="img-fluid rounded mb-4" />
                    </div>
                    <div className="justify-content-center align-content-center w-100 d-lg-none d-md-flex d-sm-flex">
                        <img src={secondImg} alt="image 1"  width="80" className="img-fluid rounded" />
                        <img src={thirdImg} alt="image 1" width="115" className="img-fluid rounded" />
                        <img src={secondImg} alt="image 1"  width="80"  className="img-fluid rounded" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="navigation p-5 d-none d-md-block ">
                    <ul className="nav nav-pills nav-fill p-4 shadow">
                        <li className="nav-item">
                            <a className="nav-link text-dark active isActive" aria-current="page" href="#">{t("upcoming")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">{t("recent")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">{t("forestry")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">{t("agriculture")}</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown d-md-none p-5">
                    <button className="btn isActive dropdown-toggle w-100" type="button" onClick={toggleDropdown}>
                        {t("navigation")}
                    </button>
                    <ul className={`dropdown-menu w-75 ${isDropdownOpen ? 'show' : ''}`}>
                        <li><a className="dropdown-item" href="#">{t("upcoming")}</a></li>
                        <li><a className="dropdown-item" href="#">{t("recent")}</a></li>
                        <li><a className="dropdown-item" href="#">{t("forestry")}</a></li>
                        <li><a className="dropdown-item" href="#">{t("agriculture")}</a></li>
                    </ul>
                </div>
                {projectData.map((project, index) => (
                    <div className="row p-md-5 m-md-5 p-2 m-2 card-div rounded-4" key={index} style={{ backgroundColor: project.backgroundColor }}>
                        <div className="col-lg-3 col-md-12 pt-lg-5 pt-md-0">
                            <img src={project.imgSrc} width="240" height="240" className="img-fluid w-100 mt-md-5" alt="alt-image" />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <h2 className="fw-bold py-lg-4 my-lg-4 my-md-2 text-center text-md-start">{t(project.title)}</h2>
                        </div>
                        <div className="col-lg-3 col-md-12 py-lg-4 my-lg-4 my-md-2 ">
                            {t(project.explanation)}
                        </div>
                        <div className="col-lg-2 col-md-12 text-end py-lg-5 my-lg-5 my-md-2">
                            <img src={icon} width="50" height="50" className="img-fluid" alt="alt-image" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;