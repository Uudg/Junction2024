import axios from "axios";
const url = import.meta.env.VITE_API_URL;
const q_url = import.meta.env.VITE_QUESTIONS_API;

// poka netu, will be after getup
export const get_jobs = async () => {
    try {
        const response = await axios.post(url + "/jobs", {
            // mock, location and for query there is overall field for ai generation, but won't be used in this way later
            location: "Helsinki",
            query: "Software Developement"
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const get_questions = async () => {
    try {
        const response = await axios.get(`${q_url}/questions`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const get_results_from_questions = async ({responses} : any) => {
    try {
        const response = await axios.post(`${q_url}/assess`, {responses});
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}