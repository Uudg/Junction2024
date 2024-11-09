import { Stack } from "../../components/jobCard/Stack";
import { JobFilter } from "../../components/jobFilter/JobFilter";
import useJobs from "../../hooks/useJobs";
import ProxyView from "../../Proxy";
import JobPreview from "./components/JobPreview";

const Jobs = () => {
  const { jobs } = useJobs();

  return (
    // <div className="container mx-auto my-6 grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
    //     <div className="fixed w-screen h-screen z-50 left-0 top-0">
    //         <div className="relative w-full h-full">
    //             <div className="absolute top-1/2 left-1/2 bg-red-600 rotate-45 p-2 w-screen -translate-x-1/2 translate-y-1/2 scale-150"></div>
    //             <div className="absolute top-1/2 left-1/2 bg-red-600 -rotate-45 p-2 w-screen -translate-x-1/2 translate-y-1/2 scale-150"></div>
    //         </div>
    //     </div>
    //     {
    //         jobs && jobs.map((el: any, index: number) => (
    //             <JobPreview key={index} job={el}/>
    //         ))
    //     }
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
            <div className="bg-white border rounded-xl w-full h-full">
          <ProxyView url="https://linkedin.com" />
        </div>
        {/* <div className="w-full h-96 bg-gray-200 rounded-xl"></div> */}
      </div>
    </div>
  );
};

export default Jobs;
