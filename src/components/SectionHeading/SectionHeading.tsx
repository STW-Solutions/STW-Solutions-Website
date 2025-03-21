import React from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
    heading: string;
    position?: 'left' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading, position = 'left' }) => {
    const containerClass = `section-heading-container ${position === 'left' ? 'ml-4' : 'mr-4'}`;
    return (
        <div className={containerClass}>
            <h2 className="fw-light section-heading-text">{heading}</h2>
            <div className="parallelogram"></div>
            <hr className="mt-0 mb-4 section-heading-hr" />
        </div>
    );
};

export default SectionHeading;