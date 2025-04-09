import React from "react";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import "./Carousel.css";
import { SlideButtonData, CarouselItems } from "../../models";

export interface Props {
  id?: string;
  carouselMainDivClasses?: string[];
  carouselItems?: CarouselItems[];
  useCard?: boolean;
  hasMovementBtn?: boolean;
  slideButtonsData?: SlideButtonData[];
  carouselIndicatorClasses?: string;
}


const Carousel = ({
  id,
  carouselMainDivClasses,
  carouselItems,
  useCard,
  hasMovementBtn = true,
  slideButtonsData = [
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
  ],
  carouselIndicatorClasses
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div id={id} className="carousel carousel-dark slide">
        <div className={`carousel-indicators ${carouselIndicatorClasses}`}>
          {slideButtonsData.map((button, index) => (
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={button.dataBsSlideTo}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={button.ariaLabel}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems?.map((carouselItem, index) => (
            <div
              className={`carousel-item` + (index === 0 ? " active" : "")}
              data-bs-interval="10000"
              key={index}
            >
              {useCard && (
                <Card
                  cardType="default"
                  imageSrc={carouselItem.imageSrc}
                  information={carouselItem.information}
                  title={carouselItem.title}
                  backgroundColor={carouselItem.backgroundColor || "#E4FFF3"}
                  cardTitleClasses={"stw-card-title text-capitalize"}
                  cardTextClasses={"text-muted"}
                />
              )}
              {!useCard && (
                <div>
                  <img
                    src={carouselItem.imageSrc}
                    className="d-block w-100"
                    alt={carouselItem.alt}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{carouselItem.title}</h5>
                    <p>{carouselItem.information}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {hasMovementBtn && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Carousel;
