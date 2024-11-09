import { JobFilter } from "../../components/jobFilter/JobFilter";
import useJobs from "../../hooks/useJobs";
import ProxyView from "../../Proxy";
import JobPreview from "./components/JobPreview";

const Jobs = () => {
    const { jobs } = useJobs();

    return (
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-2">
            {/* Filters */}
            <div className="col-span-1 xl:col-span-1 p-4">
                <JobFilter />
            </div>
            {/* List */}
            <div className="col-span-1 xl:col-span-2 flex flex-col gap-4 h-screen overflow-y-scroll p-4">
                {/* <Stack onVote={(item: any, vote: any) => console.log(item.props, vote)}> */}
                {jobs &&
                    jobs.map((el: any, index: number) => (
                        <JobPreview key={index} job={el} />
                    ))}
                {/* </Stack> */}
            </div>
            {/* Frame */}
            <div className="col-span-1 xl:col-span-2 p-4 px-2 h-screen hidden xl:block">
                <div className="bg-white border rounded-xl w-full h-full p-4 flex flex-col gap-2">
                    {/* <ProxyView url="https://linkedin.com" /> */}
                    <div className="w-full h-10 bg-gray-200 rounded-xl"></div>
                    <div className="w-full h-10 bg-gray-200 rounded-xl"></div>
                    <div className="w-full h-96 bg-gray-200 rounded-xl"></div>
                    <div className="w-full h-20 bg-gray-200 rounded-xl"></div>
                    <div className="w-full h-20 bg-gray-200 rounded-xl"></div>
                    <div className="w-full h-20 bg-gray-200 rounded-xl"></div>
                    <div className="w-full h-10 bg-gray-200 rounded-xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
