import { useTranslation } from "react-i18next";

import twoPeopleOnBoard from "../../images/two_people_standing_sitting.webp";
import girlPointingMobile from "../../images/girl_pointing_mobile.webp";
import girlSitting from "../../images/girl_sitting.webp";
import "./HowItWorks.css";

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    {
      imageUrl: twoPeopleOnBoard,
      title: "choose_a_solution",
      description: "choose_a_service_description",
      classes: "two-people-img",
    },
    {
      imageUrl: girlPointingMobile,
      title: "tell_us_about_your_project",
      description: "tell_us_about_your_project_description",
      classes: "girl-pointing-img",
    },
    {
      imageUrl: girlSitting,
      title: "we_will_take_it_from_there",
      description: "we_will_take_it_from_there_description",
      classes: "girl-sitting-img",
    },
  ];
  return (
    <div className="bg-transparent container">
      <span className="text-center">
        <h2 className="stw-solutions-h2 text-capitalize">{t("how_it_works")}</h2>
        <div className="text-muted">
          {t("discover_the_effortless_process_behind_our_solution")}
        </div>
        <hr/>
      </span>
      <div className="d-flex justify-content-center align-items-center flex-column flex-md-row mt-3 mt-md-5">
        {steps.map((step, index) => (
          <div className="mx-5 mt-4 mt-md-0 step-box" key={index}>
            <div className="how-it-works-img-box d-flex justify-content-center align-items-center ">
              <img src={step.imageUrl} />
            </div>
            <h5 className="text-black mt-3">{t(step.title)}</h5>
            <div className="description text-muted" dangerouslySetInnerHTML={{ __html: t(step.description) }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
