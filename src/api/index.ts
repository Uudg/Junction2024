import axios from "axios";
const url = import.meta.env.VITE_API_URL;
const q_url = import.meta.env.VITE_QUESTIONS_API;

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

export const get_questions = async () => {
    try {
        const response = await axios.get(`${q_url}/questions`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const get_results_from_questions = async ({data} : any) => {
    try {
        const response = await axios.post(`${q_url}/assess`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}