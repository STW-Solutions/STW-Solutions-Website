import React from 'react';
import './Card.css';

interface CardProps {
    cardType: 'default' | 'team'; // New: Card type prop
    imageSrc: string;
    title?: string; // Optional: Title for default card
    backgroundColor?: string; // Optional: Background color for default card
    information?: string; // Optional: Information for default card
    name?: string; // Optional: Name for team card
    jobTitle?: string; // Optional: Job title for team card
    aboutInfo?: string; // Optional: About info for team card
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
                                   }) => {
    return (
        <div className={`card border-0 px-4 py-1 mb-3 h-100 ${cardType === 'team' ? 'team-card' : ''}`} style={{ backgroundColor }}>
            {cardType === 'default' ? (
                <>
                    <div className="">
                        <img src={imageSrc} alt={title} className="card-image img-fluid rounded mb-4" />
                    </div>
                    <div className="card-body p-0 text-start">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{information}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="">
                        <img src={imageSrc} alt={name} className="team-card-image img-fluid rounded mb-4" />
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