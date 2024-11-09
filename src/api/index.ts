import axios from "axios";
import { findLevel } from "../utils/findLevel";

const q_url = import.meta.env.VITE_QUESTIONS_API;

export const get_jobs = async (
    type: string,
    location: { country: string; city: string },
    role: string
) => {
    try {
        const response = await axios.post(`${q_url}/find_jobs_${type}`, {
            country: location.city,
            city: location.country,
            role,
            results_wanted: 5,
        });

        const jobs = response.data.map((job: any) => {
            const perks = [];
            perks.push(
                job.job_type && job.job_type,
                job.is_remote ? "remote" : "on site"
            );

            const level = findLevel(job.description);
            if (level !== "unknown") {
                perks.push(level);
            }

            // Generate a random match level percentage between 72% and 95%
            const matchLevel = Math.floor(Math.random() * (95 - 72 + 1)) + 72;
            perks.push(`✅ ${matchLevel}% match`);

            return { ...job, perks };
        });

        return jobs;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const get_questions = async () => {
    try {
        const response = await axios.get(`${q_url}/questions`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const get_results_from_questions = async ({ responses }: any) => {
    try {
        const response = await axios.post(`${q_url}/assess`, { responses });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
