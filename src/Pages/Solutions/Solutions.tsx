import { useState } from "react";
import bgImage from "../../images/service-bg.png";
import serviceImg from "../../images/service1.png";
import value1 from "../../images/service3.png";
import { useTranslation } from "react-i18next";
import value2 from "../../images/values/value2.webp";
import value3 from "../../images/values/value3.webp";
import value4 from "../../images/values/value4.webp";
import './Solutions.css';
import HowItWorks from "../../components/HowItWorks/HowItWorks";

interface CardInfo {
  imageSrc: string;
  title: string;
  backgroundColor: string;
  information: string;
  intro?: string;
}

const Solutions = () => {
  const { t } = useTranslation();
  const [modalData, setModalData] = useState<CardInfo | null>(null);

  const data: CardInfo[] = [
    {
      imageSrc: value1,
      title: t("agriculture_title"),
      backgroundColor: "#FFFFFF",
      information: t("agriculture_info"),
      intro: t("agriculture_intro"),
    },
    {
      imageSrc: value2,
      title: t("waste_management_title"),
      backgroundColor: "#B7EDD6",
      information: t("values_responsibility_info"),
    },
    {
      imageSrc: value3,
      title: t("forest_title"),
      backgroundColor: "#FFFFFF",
      information: t("values_trust_info"),
    },
    {
      imageSrc: value4,
      title: t("education_title"),
      backgroundColor: "#B7EDD6",
      information: t("values_social_impact_info"),
    },
  ];

  const handleCardClick = (card: CardInfo) => {
    setModalData(card);
  };

  return (
    <div className="container-fluid container-fluid-service">
      <div
        className="services-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="row">
          <div className="col-md-6 text-white d-flex align-items-center justify-content-center">
            <h1 className="text-md-start text-center fw-medium p-5 header">
              {t("header")}
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
      <div className="py-5">
        <h2 className="fw-light section-head-text text-center">
          {t("section_heading")}
        </h2>
        <div className="head-bottom-line"></div>
      </div>
      <div className="row mx-md-5 px-md-5">
        {data.map((card, index) => (
          <div
            className="col-lg-4 col-md-12 col-sm-12"
            key={index}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div
              className="card shadow card-info p-4"
              onClick={() => handleCardClick(card)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <img
                  src={serviceImg}
                  alt={card.title}
                  className="card-image img-fluid rounded mb-4"
                />
              </div>
              <div className="">
                <h3 className="text-center text-success py-1">{card.title}</h3>
                <p className="py-3">{card.information}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white container-fluid">
        <HowItWorks />
      </div>

      {modalData && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close fs-5"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h3 className="text-center mod-title p-3">{modalData.title}</h3>
                <div className="d-flex justify-content-center align-items-center align-content-center ">
                  <img
                    src={modalData.imageSrc}
                    alt={modalData.title}
                    width="350"
                    className="img-fluid rounded mb-4"
                  />
                </div>
                <div className=" p-4">
                  <span>{modalData.intro}</span>
                </div>
                <div
                  className="modal-body"
                  style={{ backgroundColor: modalData.backgroundColor }}
                >
                  <div className="centered-div float-end">
                    <button className="btn btn-success p-2  centered-btn m-3">
                      {t("get_involved")}
                    </button>
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

export default Solutions;
