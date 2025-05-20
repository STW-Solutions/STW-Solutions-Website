import React from "react";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import "./Carousel.css";
import { SlideButtonData, CarouselItems } from "../../models";
import { Link } from "react-router";

export interface Props {
  id?: string;
  carouselMainDivClasses?: string[];
  carouselItems?: CarouselItems[];
  useCard?: boolean;
  hasMovementBtn?: boolean;
  slideButtonsData?: SlideButtonData[];
  carouselIndicatorClasses?: string;
  children?: any;
}

const Carousel = ({
  id,
  carouselMainDivClasses,
  carouselItems,
  useCard = false,
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
  carouselIndicatorClasses = "",
  children,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div id={id} className="carousel carousel-dark slide">
        <div className={`carousel-indicators ${carouselIndicatorClasses}`}>
          {slideButtonsData.map((button, index) => (
            <button key={index}
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
                  information={t(carouselItem.information || '')}
                  title={t(carouselItem.title || '')}
                  backgroundColor={carouselItem.backgroundColor || "#E4FFF3"}
                  cardTitleClasses={"stw-card-title text-capitalize"}
                  cardTextClasses={"text-muted"}
                />
              )}
            </div>
          ))}
          {children && React.Children.map(children, (child, index) => (
            <Link to={child.link} target="_blank"
              className={`shadow p-5 card carousel-item partner-carousel-item` + (index === 0 ? " active" : "")}
              data-bs-interval="10000"
              key={index}
            >
              {child}
            </Link>
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
