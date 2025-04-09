import React from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
    heading?: string;
    parentClasses?: string;
    skewLineClasses?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading, parentClasses, skewLineClasses }) => {
    return (
        <div className={parentClasses}>
            <h2 className="fw-medium fs-1">{heading}</h2>
            <div className={skewLineClasses + " parallelogram"}></div>
        </div>
    );
};

export default SectionHeading;