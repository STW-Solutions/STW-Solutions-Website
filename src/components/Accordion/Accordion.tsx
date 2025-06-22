import React from "react";
import { AccordionProps } from "../../models";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className={`accordion-container ${containerClassName}`}>
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${itemClassName}`}>
          <div
            className={`accordion-header d-flex justify-content-between align-items-center py-3 ${headerClassName}`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="fs-5 fs-lg-3">{t(item.question)}</span>
            <span className={`plus-icon ${iconClassName}`}>
              {activeIndex === index ? "X" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className={`accordion-content py-3 ${contentClassName}`}>
              <span className="text-success fs-5 fw-bold">{t(item.question)}</span>
              <p className="mb-0 fs-6 py-3">{t(item.answer)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
