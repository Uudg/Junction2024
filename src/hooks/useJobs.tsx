import { useEffect, useState } from "react";
import { get_jobs } from "../api";
import { useTest } from "../pages/Test/TestProvider";

const useJobs = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [
        loading,
        // setLoading
    ] = useState<boolean>(false);
    const { results } = useTest();

    useEffect(() => {
        if (results) {
            const location = {
                country: "Canada",
                city: "Toronto",
            };
            load("google", location, "");
            load("indeed", location, "");
            load("linkedin", location, "");
        }
    }, [results]);

    const load = async (
        type: string,
        location: { country: string; city: string },
        role: string
    ) => {
        const response = await get_jobs(type, location, role);
        setJobs((prev) => [...prev, ...response]);
    };

    return { jobs, loading };
};

export default useJobs;
