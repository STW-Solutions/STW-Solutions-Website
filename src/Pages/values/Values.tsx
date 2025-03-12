import { useTranslation } from "react-i18next";
import './Values.css';
import Card from '../../components/Card/Card'
import value1 from '../../../public/images/values/value1.png';
import value2 from '../../../public/images/values/value2.png';
import value3 from '../../../public/images/values/value3.png';
import value4 from '../../../public/images/values/value4.png';

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
            title: t("values.sustainability"),
            backgroundColor: "#FFFFFF",
            information: t("values.sustainabilityInfo"),
        },
        {
            imageSrc: value2,
            title: t("values.responsibility"),
            backgroundColor: "#B7EDD6",
            information: t("values.responsibilityInfo"),
        },
        {
            imageSrc: value3,
            title: t("values.trust"),
            backgroundColor: "#FFFFFF",
            information: t("values.trustInfo"),
        },
        {
            imageSrc: value4,
            title: t("values.socialImpact"),
            backgroundColor: "#B7EDD6",
            information: t("values.socialImpactInfo"),
        },
    ];

    return (
        <div className="container-fluid cont">
            <h4 className="text-center fw-bold text-white">{t("values.ourValues")}</h4>
            <div className="w-100 text-white text-center">
                {t("values.description")}
            </div>
            <div className="row px-5 mx-5">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-3 mb-2">
                        <Card
                            cardType="default"
                            imageSrc={card.imageSrc}
                            title={card.title}
                            backgroundColor={card.backgroundColor}
                            information={card.information}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;