import solutionsData from "./solutions-data.json"
import SolutionsTemplate from "../../components/solutionsTemplate/Solutions-template";
import {useParams} from "react-router";

const SolutionForestry = () => {
    const solutionType = useParams().name;

    return (
        solutionType === "solutions-forestry"
            ? <SolutionsTemplate {...solutionsData.solutionForestry} />
            : solutionType === "waste-management"
                ? <SolutionsTemplate {...solutionsData.solutionWasteManagement} />
                : <SolutionsTemplate {...solutionsData.solutionRenewableEnergy} />
    );
}

export default SolutionForestry;


