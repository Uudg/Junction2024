import axios from "axios";
import { findLevel } from "../utils/findLevel";

const q_url = import.meta.env.VITE_API_URL;

export const get_jobs = async (
    provider: string,
    location: { city: string; country: string },
    userData: {
        top_feedback: string[];
        top_traits: string[];
        top_jobs: string[];
    }
) => {
    try {
        const response = await axios.post(`${q_url}/jobs`, {
            location,
            provider,
            top_feedback: userData.top_feedback,
            top_traits: userData.top_traits,
            top_jobs: userData.top_jobs,
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
        const response = await axios.post(`${q_url}/answers`, { responses });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
