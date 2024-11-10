import { useEffect, useState } from "react";
import { get_jobs } from "../api";
import { useTest } from "../pages/Test/TestProvider";

const useJobs = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { results, location } = useTest();

    const [loaded, setLoaded] = useState({
        google: false,
        indeed: false,
        linkedin: false,
        glassdoor: false,
    });

    const [chosenJob, setChosenJob] = useState<any>(null);
    const sources = ["google", "indeed", "linkedin", "glassdoor"];

    const getRandomSoftColor = () => {
        const colors = [
            "bg-red-200",
            "bg-yellow-200",
            "bg-green-200",
            "bg-blue-200",
            "bg-indigo-200",
            "bg-purple-200",
            "bg-pink-200",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        if (results) {
            const loadAllJobs = async () => {
                await Promise.all(sources.map((source) => load_jobs(source)));
                setLoading(false);
                setChosenJob((prevJobs: any) => prevJobs[0]);
            };
            loadAllJobs();
        }
    }, [results]);

    const load_jobs = async (source: string) => {
        try {
            const response = await get_jobs(source, location, {
                top_feedback: results.feedback.slice(0, 3),
                top_traits: results.traits
                    .slice(0, 3)
                    .map((el: any) => el.Trait),
                top_jobs: results.job_matches
                    .slice(0, 3)
                    .map((el: any) => el.job_title),
            });
            updateJobs(response);
        } catch (error) {
            console.error(`Error loading jobs from ${source}:`, error);
        } finally {
            setLoaded((prevLoaded) => ({ ...prevLoaded, [source]: true }));
        }
    };

    const updateJobs = (newJobs: any[]) => {
        setJobs((prevJobs) => {
            const allJobs = [...prevJobs, ...newJobs];
            const jobsWithMatchLevels = allJobs.map((job: any) => {
                const perks = job.perks ? [...job.perks] : [];
                const updatedPerks = perks.filter(
                    (perk) => !perk.includes("% match")
                );

                if (job.rating) {
                    let matchLevel = Math.round((job.rating / 10) * 100);
                    matchLevel = Math.min(matchLevel + Math.random() * 5, 95);
                    updatedPerks.push(`✅ ${matchLevel.toFixed(1)}% match`);
                }

                return {
                    ...job,
                    perks: updatedPerks,
                    bgColor: job.bgColor || getRandomSoftColor(),
                };
            });

            return jobsWithMatchLevels.sort((a, b) => b.rating - a.rating);
        });
    };

    return { jobs, loading, chosenJob, setChosenJob, loaded };
};

export default useJobs;
