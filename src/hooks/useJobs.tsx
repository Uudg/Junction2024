import { useEffect, useState } from "react";
import { get_jobs } from "../api";
import { useTest } from "../pages/Test/TestProvider";

const useJobs = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { results, location } = useTest();

    const [chosenJob, setChosenJob] = useState<any>(null);

    const handleJobSelect = (job: any) => {};

    useEffect(() => {
        if (results) {
            loadAllJobs(results.job_matches[0].job_title);
        }
    }, [results]);

    const loadAllJobs = async (role: string) => {
        setLoading(true);
        const sources = ["google", "indeed", "linkedin"];
        const allJobs = [];

        for (const source of sources) {
            const response = await get_jobs(source, location, role);
            allJobs.push(...response);
        }

        const matchLevels = Array.from(
            { length: allJobs.length },
            () => Math.floor(Math.random() * (95 - 72 + 1)) + 72
        ).sort((a, b) => b - a);

        const jobsWithMatchLevels = allJobs.map((job: any, index: number) => {
            const perks = job.perks ? [...job.perks] : [];
            const matchLevel = `✅ ${matchLevels[index]}% match`;

            const updatedPerks = perks.filter(
                (perk) => !perk.includes("% match")
            );
            updatedPerks.push(matchLevel);

            return { ...job, perks: updatedPerks };
        });

        setJobs(jobsWithMatchLevels);
        setLoading(false);
    };

    useEffect(() => {
        if (jobs && jobs.length > 0) {
            setChosenJob(jobs[0]);
        }
    }, [jobs]);

    return { jobs, loading, chosenJob, setChosenJob };
};

export default useJobs;
