import { Image, Link } from "lucide-react";
import { fDate } from "../../../utils/formatDate";
import { capitalize } from "../../../utils/capitalize";
import { useTest } from "../../Test/TestProvider";

const JobPreview = ({ job, select, bgColor }: any) => {
    const { location } = useTest();

    return (
        <div
            className={`gap-2 flex ${"bg-white"} p-2 border border-slate-200 rounded-3xl md:flex-row`}
        >
            <div
                className={`flex flex-col ${bgColor} rounded-2xl p-4 gap-8 justify-between w-1/2`}
            >
                <div className="flex justify-between gap-4">
                    <div className="bg-white p-2 px-3 flex items-center rounded-full text-xs whitespace-nowrap">
                        {job.date_posted
                            ? fDate(job.date_posted)
                            : "9. November 2024"}
                    </div>
                    <a
                        className="bg-white rounded-full p-3 aspect-square cursor-pointer hover:bg-zinc-100"
                        href={job.job_url}
                        target="__blank"
                    >
                        <Link size={16} />
                    </a>
                </div>
                <div className="flex justify-between gap-2">
                    <div className="flex flex-col">
                        <h3 className="text-sm font-light">{job.company}</h3>
                        <h2 className="font-thin text-xl">
                            {job.title.split("").slice(0, 24).join("") + "..."}
                        </h2>
                    </div>
                    <div className="bg-white aspect-square shrink-0 rounded-full h-10 overflow-hidden flex items-center justify-center">
                        {job.company_logo ? (
                            <img
                                className="h-full w-full"
                                src={job.company_logo}
                                alt={job.company}
                            />
                        ) : (
                            <Image size={16} />
                        )}
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col justify-between p-4 md:px-2 md:items-start items-center w-1/2 pr-4">
                <div className="flex flex-row w-full justify-between gap-4">
                    <div className="flex flex-col mb-4 text-sm">
                        {job.min_amount && job.max_amount ? (
                            <div className="flex flex-col mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="font-semibold">
                                        {job.min_amount} - {job.max_amount} $
                                    </div>
                                </div>
                                <div className="text-xs">{job.interval}</div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="font-semibold text-xs">
                                    Not declared
                                </div>
                            </div>
                        )}
                        <div className="text-gray-500 text-sm">
                            {location.country} - {location.city}
                        </div>
                    </div>
                    <button
                        className="rounded-xl px-4 py-2 bg-black text-white text-sm h-fit shrink-0"
                        onClick={() => select(job)}
                    >
                        Details
                    </button>
                </div>
                {job.perks && (
                    <div className="flex gap-2 flex-wrap w-full">
                        {job.perks.map((el: any, index: number) => {
                            if (!el) return null;
                            return (
                                <div
                                    key={index}
                                    className="rounded-full px-2 text-sm h-fit font-light border border-gray-400 py-1"
                                >
                                    {capitalize(el)}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobPreview;
