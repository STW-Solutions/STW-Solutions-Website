import { useTranslation } from "react-i18next";
import './Values.css';
import Card from '../Card/Card';
import value1 from '../../images/values/value1.png';
import value2 from '../../images/values/value2.png';
import value3 from '../../images/values/value3.png';
import value4 from '../../images/values/value4.png';

interface CardData {
    imageSrc: string;
    title: string;
    backgroundColor: string;
    information: string;
}

const Values = () => {
    const { t } = useTranslation();

    const cardData: CardData[] = [
        {
            imageSrc: value1,
            title: t("sustainability"),
            backgroundColor: "#FFFFFF",
            information: t("we_emphasize_sustainable"),
        },
        {
            imageSrc: value2,
            title: t("responsibility"),
            backgroundColor: "#B7EDD6",
            information: t("we_take_responsibility"),
        },
        {
            imageSrc: value3,
            title: t("trust"),
            backgroundColor: "#FFFFFF",
            information: t("we_foster_a"),
        },
        {
            imageSrc: value4,
            title: t("social_impact"),
            backgroundColor: "#B7EDD6",
            information: t("commitment_to_making"),
        },
    ];

    return (
        <div className="container-fluid cont">
            <h4 className="text-center fw-bold text-white">{t("our_values")}</h4>
            <div className="w-100 text-white text-center">
                {t("values_description")}
            </div>
            <div className="row values-row">
                {cardData.map((card, index) => (
                    <div key={index} className={`col-md-3 card-container`}>
                        <div className="cards">
                            <Card
                                cardType="default"
                                imageSrc={card.imageSrc}
                                title={card.title}
                                backgroundColor={card.backgroundColor}
                                information={card.information}
                                cardTitleClasses={['card-title']}
                                cardTextClasses={['card-text']}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;