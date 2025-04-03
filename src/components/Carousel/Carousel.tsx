import React from "react";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import "./Carousel.css"

interface Props {
  id?: string;
  carouselMainDivClasses?: string[];
  carouselItems?: {
    name: string;
    imageUrl?: string;
    alt?: string;
    description: string;
  }[];
  useCard?: boolean;
  hasMovementBtn?: boolean;
}

const Carousel = ({
  id,
  carouselMainDivClasses,
  carouselItems,
  useCard,
  hasMovementBtn = true,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div id={id} className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
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
                  imageSrc={carouselItem.imageUrl}
                  information={t(carouselItem.description)}
                  title={t(carouselItem.name)}
                  backgroundColor="#E4FFF3"
                  cardTitleClasses={["stw-card-title", "text-capitalize"]}
                  cardTextClasses={["text-muted"]}
                />
              )}
              {!useCard && (
                <div>
                  <img
                    src={carouselItem.imageUrl}
                    className="d-block w-100"
                    alt={carouselItem.alt}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{carouselItem.name}</h5>
                    <p>{carouselItem.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {hasMovementBtn &&
        (
          <><button
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
          </button><button
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
            </button></>
        )
      }
      </div>
    </>
  );
};

export default Carousel;
