import useJobs from "../../hooks/useJobs";
import JobPreview from "./components/JobPreview";

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

const Jobs = () => {
    
    const {  } = useJobs();

    return (
        <div className="container mx-auto my-6 grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="fixed w-screen h-screen z-50 left-0 top-0">
                <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-1/2 bg-red-600 rotate-45 p-2 w-screen -translate-x-1/2 translate-y-1/2 scale-150"></div>
                    <div className="absolute top-1/2 left-1/2 bg-red-600 -rotate-45 p-2 w-screen -translate-x-1/2 translate-y-1/2 scale-150"></div>
                </div>
            </div>
            {
                jobs && jobs.map((el: any, index: number) => (
                    <JobPreview key={index} job={el}/>
                ))
            }
        </div>
    )
}

export default Jobs;