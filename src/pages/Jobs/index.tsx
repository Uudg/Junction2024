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
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-2">
            {/* Filters */}
            <div className="col-span-1 lg:col-span-3 xl:col-span-1 p-4 bg-white">

            </div>
            {/* List */}
            <div className="col-span-1 flex flex-col gap-4 h-screen overflow-y-scroll p-4">
                {
                    jobs && jobs.map((el: any, index: number) => (
                        <JobPreview key={index} job={el}/>
                    ))
                }
            </div>
            {/* Frame */}
            <div className="col-span-2 p-4 h-screen">
                <div className="bg-white border rounded-xl w-full h-full">
                    <ProxyView url="https://rtu.lv"/>
                </div>
                {/* <div className="w-full h-96 bg-gray-200 rounded-xl"></div> */}
            </div>
        </div>
    )
}

export default Jobs;