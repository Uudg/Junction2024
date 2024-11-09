import {
    // useEffect,
    useState
} from "react";
// import { get_jobs } from "../api";


// use mock jobs for now, will update later through back
let jobs = [
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    {
        job_title: "Senior Software Developer",
        company: "XYZ Corp",
        location: "Helsinki, Finland",
        apply_url: "https://example.com/apply/123",
        salary_range: "EUR 40,000 - 70,000",
        perks: [
            "Work-life balance",
            "Flexible work hours",
            "Remote work opportunities",
            "Team-building activities",
            "Free snacks and drinks",
            "Health and wellness resources"
        ]
    },
    
]

const useJobs = () => {

    // 

    // const [jobs, setJobs] = useState<any>(null);
    const [
        loading,
        // setLoading
    ] = useState<any>(null);

    // const load = async () => {
    //     setLoading(true);
    //     const response = await get_jobs();
    //     setJobs(response);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     load()
    // }, [])

    return {
        jobs, loading
    }
}

export default useJobs;