import useJobs from "../../hooks/useJobs";
import JobPreview from "./components/JobPreview";

const Jobs = () => {
    
    const { jobs } = useJobs();

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