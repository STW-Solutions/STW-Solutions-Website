import React from "react";
import {AccordionProps} from "../../models";

const Accordion: React.FC<AccordionProps> = ({
                                                       items,
                                                       activeIndex,
                                                       toggleAccordion,
                                                       containerClassName = "",
                                                       itemClassName = "",
                                                       headerClassName = "",
                                                       contentClassName = "",
                                                       iconClassName = "",
                                                   }) => {
    return (
        <div className={`accordion-container ${containerClassName}`}>
            {items.map((item, index) => (
                <div key={index} className={`accordion-item ${itemClassName}`}>
                    <div
                        className={`accordion-header d-flex justify-content-between align-items-center py-3 ${headerClassName}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="fs-3 fs-lg-3">{item.question}</span>
                        <span className={`plus-icon ${iconClassName}`}>
              {activeIndex === index ? "X" : "+"}
            </span>
                    </div>
                    {activeIndex === index && (
                        <div className={`accordion-content py-3 ${contentClassName}`}>
                            <span className="text-success fs-5 fw-bold">{item.question}</span>
                            <p className="mb-0 fs-6 py-3">{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;