// import { JobFilter } from "../../components/jobFilter/JobFilter";
import useJobs from "../../hooks/useJobs";
import ProxyView from "../../Proxy";
import TraitsChart from "./components/Chart";
import JobPreview from "./components/JobPreview";

import { motion } from "framer-motion";
import JobsChart from "./components/JobsChart";
import Compatibility from "./components/Compatibility";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-fit">
            <motion.div
                className="w-8 h-8 bg-black rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <span className="ml-4 text-sm">New jobs are loading...</span>
        </div>
    );
};

const Jobs = () => {
    const { jobs, loaded, chosenJob, setChosenJob } = useJobs();

    const getFilledCircles = (rating: number) => {
        const filledCount = Math.max(3, Math.round(rating / 2));
        return Array(5)
            .fill(null)
            .map((_, index) => (
                <div
                    key={index}
                    className={`w-8 shrink-0 aspect-square border border-green-400 rounded-full ${
                        index < filledCount ? "bg-green-400" : ""
                    }`}
                ></div>
            ));
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-2">
            {/* Filters */}
            <div className="col-span-1 xl:col-span-2 h-screen p-4 flex flex-col gap-4">
                <div className="w-full h-1/2 p-4 border bg-white rounded-xl flex flex-col gap-4">
                    <h3 className="text-lg shrink-0">Personality Charts</h3>
                    <div className="flex flex-col gap-4 h-full">
                        <TraitsChart />
                        <JobsChart />
                    </div>
                </div>
                <div className="w-full h-1/2 p-4 border bg-white rounded-xl flex flex-col gap-4">
                    <h3 className="text-lg shrink-0">Compatibility</h3>
                    <div className="flex h-fit gap-2">
                        {chosenJob && getFilledCircles(chosenJob.rating)}
                    </div>
                    <div className="flex flex-col gap-4 h-fit border-b border-gray-300 pb-4">
                        {chosenJob && (
                            <Compatibility
                                type={chosenJob.rating >= 8 ? "best" : "strong"}
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-scroll">
                        {chosenJob &&
                            chosenJob.sentences &&
                            chosenJob.sentences.map((el: any) => (
                                <div className="font-medium text-sm p-2 border rounded-xl">
                                    ✅ {el}
                                </div>
                            ))}
                    </div>
                </div>
                {/* <JobFilter /> */}
            </div>
            {/* List */}
            <div className="col-span-1 xl:col-span-2 flex flex-col gap-4 h-screen overflow-y-scroll py-4">
                {loaded && (
                    <div className="w-full h-fit rounded-xl flex justify-center items-center bg-white p-4 border">
                        <Loader />
                    </div>
                )}
                {jobs &&
                    jobs.map((el: any, index: number) => (
                        <JobPreview
                            key={index}
                            job={el}
                            select={setChosenJob}
                            bgColor={el.bgColor}
                            selected={
                                !chosenJob &&
                                chosenJob?.job_title === el.job_title &&
                                el.company === el.company
                            }
                        />
                    ))}
            </div>
            {/* Frame */}
            <div className="col-span-1 xl:col-span-2 p-4 px-2 h-screen xl:block">
                <div className="bg-white border rounded-xl w-full h-full p-4 flex flex-col gap-2">
                    {chosenJob && (
                        <ProxyView url={chosenJob.job_url} job={chosenJob} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
