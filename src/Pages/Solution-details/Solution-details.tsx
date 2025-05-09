import SolutionsTemplate from "../../components/solutionsTemplate/Solutions-template";
import {useParams} from "react-router";
import { solutions } from "../../constants";


const SolutionForestry = () => {
    const solutionType = useParams().name;

    return (
        solutionType === "solutions-forestry"
            ? <SolutionsTemplate {...solutions.solutionForestry} />
            : solutionType === "waste-management"
                ? <SolutionsTemplate {...solutions.solutionWasteManagement} />
                : <SolutionsTemplate {...solutions.solutionRenewableEnergy} />
    );
}

export default SolutionForestry;


