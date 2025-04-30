import "./Solution-forestry.css";
import solutionsData from "./solutions-data.json"
import SolutionsTemplate from "../../components/solutionsTemplate/Solutions-template";

const SolutionForestry = () => {

    return (
        <div className="">
            <SolutionsTemplate {...solutionsData.solutionForestry} />
        </div>
    );
}

export default SolutionForestry;