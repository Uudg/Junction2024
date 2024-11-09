import { JobFilter } from "../../components/jobFilter/JobFilter";
import useJobs from "../../hooks/useJobs";
import ProxyView from "../../Proxy";
import JobPreview from "./components/JobPreview";

import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-fit">
            <motion.div
                className="w-12 h-12 bg-black rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <span className="ml-4 text-lg">New jobs are loading...</span>
        </div>
    );
};

const Jobs = () => {
    const { jobs, loading, chosenJob, setChosenJob } = useJobs();

    const getRandomSoftColor = () => {
        const colors = [
            "bg-red-100",
            "bg-yellow-100",
            "bg-green-100",
            "bg-blue-100",
            "bg-indigo-100",
            "bg-purple-100",
            "bg-pink-100",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-2">
            {/* Filters */}
            <div className="col-span-1 xl:col-span-1 p-4">
                <JobFilter />
            </div>
            {/* List */}
            <div className="col-span-1 xl:col-span-2 flex flex-col gap-4 h-screen overflow-y-scroll p-4">
                {loading && (
                    <div className="w-full h-full flex justify-center items-center bg-white p-4 border">
                        <Loader />
                    </div>
                )}
                {jobs &&
                    jobs.map((el: any, index: number) => (
                        <JobPreview
                            key={index}
                            job={el}
                            select={setChosenJob}
                            bgColor={getRandomSoftColor()}
                        />
                    ))}
            </div>
            {/* Frame */}
            <div className="col-span-1 xl:col-span-2 p-4 px-2 h-screen xl:block">
                <div className="bg-white border rounded-xl w-full h-full p-4 flex flex-col gap-2">
                    {chosenJob && <ProxyView url={chosenJob.job_url} />}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
