import React from "react";
import "./Card.css";

interface CardProps {
  cardType?: string;
  imageSrc?: string;
  title?: string;
  backgroundColor?: string;
  information?: string;
  name?: string;
  jobTitle?: string;
  aboutInfo?: string;
  cardTitleClasses?: string[];
  cardTextClasses?: string[];
}

const Card: React.FC<CardProps> = ({
  cardType,
  imageSrc,
  title,
  backgroundColor,
  information,
  name,
  jobTitle,
  aboutInfo,
  cardTitleClasses,
  cardTextClasses
}) => {
  return (
    <div
      className={`card card-box border-0 px-4 py-3 mb-3 ${
        cardType === "team" ? "team-card" : ""
      }`}
      style={{ backgroundColor }}
    >
      {cardType === "default" ? (
        <>
          <div className="">
            <img
              src={imageSrc}
              alt={title}
              className="card-image img-fluid rounded mb-4"
            />
          </div>
          <div className="card-body p-0 text-start">
            <h3 className={cardTitleClasses?.join(' ')}>{title}</h3>
            <p className={cardTextClasses?.join(' ')}>{information}</p>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <img
              src={imageSrc}
              alt={name}
              className="team-card-image img-fluid rounded mb-4"
            />
          </div>
          <div className="card-body p-0 text-center">
            <h3 className="team-card-name">{name}</h3>
            <h5 className="team-card-job-title">{jobTitle}</h5>
            <p className="team-card-about-info">{aboutInfo}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
