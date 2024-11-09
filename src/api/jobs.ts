import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const get_jobs = async () => {
    try {
        const response = await axios.post(url + "/jobs", {
            location: "Helsinki",
            query: "Software Developement"
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}