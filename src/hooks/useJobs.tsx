import { useEffect, useState } from "react";
import { get_jobs } from "../api/jobs";

const useJobs = () => {

    const [jobs, setJobs] = useState<any>(null);
    const [loading, setLoading] = useState<any>(null);

    const load = async () => {
        setLoading(true);
        const response = await get_jobs();
        setJobs(response);
        setLoading(false);
    }

    useEffect(() => {
        load()
    }, [])

    return {
        jobs, loading
    }
}

export default useJobs;