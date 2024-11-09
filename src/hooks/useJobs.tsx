import { useEffect, useState } from "react";
import { get_jobs } from "../api";
import { useTest } from "../pages/Test/TestProvider";

const useJobs = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { results, location } = useTest();

    useEffect(() => {
        // if (results) {
        loadAllJobs();
        // }
    }, [results]);

    const loadAllJobs = async () => {
        setLoading(true);
        const sources = ["google", "indeed", "linkedin"];
        const allJobs = [];

        for (const source of sources) {
            const response = await get_jobs(source, location, "Designer");
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

    return { jobs, loading };
};

export default useJobs;
