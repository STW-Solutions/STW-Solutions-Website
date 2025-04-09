import { useTranslation } from "react-i18next";
import "./Values.css";
import Card from "../Card/Card";
import value1 from "../../images/values/value1.webp";
import value2 from "../../images/values/value2.webp";
import value3 from "../../images/values/value3.webp";
import value4 from "../../images/values/value4.webp";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import Carousel from "../Carousel/Carousel";
import { SlideButtonData } from "../../models";

interface CardData {
  imageSrc: string;
  title: string;
  backgroundColor: string;
  information: string;
}

const Values = () => {
  const { t } = useTranslation();

  const slideButtonsData : SlideButtonData[] = [
    {
      dataBsSlideTo: "0",
      ariaLabel: "Slide 1",
    },
    {
      dataBsSlideTo: "1",
      ariaLabel: "Slide 2",
    },
    {
      dataBsSlideTo: "2",
      ariaLabel: "Slide 3",
    },
    {
        dataBsSlideTo: "3",
        ariaLabel: "Slide 4",
      },
  ];

  const cardData: CardData[] = [
    {
      imageSrc: value1,
      title: t("sustainability"),
      backgroundColor: "#FFFFFF",
      information: t("we_emphasize_sustainable"),
    },
    {
      imageSrc: value2,
      title: t("responsibility"),
      backgroundColor: "#B7EDD6",
      information: t("we_take_responsibility"),
    },
    {
      imageSrc: value3,
      title: t("trust"),
      backgroundColor: "#FFFFFF",
      information: t("we_foster_a"),
    },
    {
      imageSrc: value4,
      title: t("social_impact"),
      backgroundColor: "#B7EDD6",
      information: t("commitment_to_making"),
    },
  ];

  return (
    <div className="container-fluid cont">
      <h2 className="text-center text-white stw-solutions-h2">{t("our_values")}</h2>
      <div className="w-100 text-black fw-bold text-center">
        {t("values_description")}
      </div>
      <div className="row values-row">
        {cardData.map((card, index) => (
          <div key={index} className={`d-none d-md-block col-md-6 col-lg-3`}>
            <div className="cards mx-md-auto"> 
              <AnimateOnScroll reappear={true}>
                <Card
                  cardType="default"
                  imageSrc={card.imageSrc}
                  title={card.title}
                  backgroundColor={card.backgroundColor}
                  information={card.information}
                  cardTitleClasses={"card-title"}
                  cardTextClasses={"card-text"}
                  cardBodyClasses={"card-h"}
                  cardMainClasses={index > 1 ? "mt-md-5 mt-lg-4" : "mt-md-4"}
                />
              </AnimateOnScroll>
            </div>
          </div>
        ))}
        <div className="row our-values-sm mt-5">
          <Carousel
            id="ourValuesCarousel"
            carouselItems={cardData}
            useCard={true}
            hasMovementBtn={false}
            slideButtonsData={slideButtonsData}
            carouselIndicatorClasses="stw-carousel-indicators"
          ></Carousel>
        </div>
      </div>
    </div>
  );
};

export default Values;
