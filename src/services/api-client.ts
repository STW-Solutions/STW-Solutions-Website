import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://stw-solution.net/wp-json/wp/v2"
})

export { CanceledError };