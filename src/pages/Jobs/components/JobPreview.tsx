import { Bookmark, Image } from "lucide-react";
import { fDate } from "../../../utils/formatDate";

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

const JobPreview = ({ job }: any) => {
  const bgColor = getRandomSoftColor();

  return (
    <div className="gap-2 flex bg-white p-2 border border-gray-300 rounded-3xl flex-col md:flex-row">
      <div className={`flex flex-col ${bgColor} w-full rounded-2xl p-4 gap-8`}>
        <div className="flex justify-between gap-4">
          <div className="bg-white p-2 px-3 text-sm flex items-center rounded-full">
            {/* date ????? */}
            {fDate(new Date())}
          </div>
          <div className="bg-white rounded-full p-3 cursor-pointer">
            <Bookmark />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-sm font-light">{job.company}</h3>
            <h2 className="font-thin text-2xl">{job.job_title}</h2>
          </div>
          <div className="bg-white aspect-square shrink-0 rounded-full h-14 flex items-center justify-center">
            <Image size={16} />
          </div>
        </div>
        {job.perks && (
          <div className="md:hidden flex gap-2 mb-8 flex-wrap w-full">
            {job.perks.map((el: any, index: number) => (
              <div
                key={index}
                className="rounded-full px-4 text-xs font-light border border-gray-400 py-1"
              >
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-row md:flex-col justify-center md:justify-between px-4 md:px-2 md:items-start items-center">
        <div className="flex flex-row w-full justify-between items-center gap-2">
          <div className="flex flex-col">
            <div className="font-bold">{job.salary_range}</div>
            <div className="text-gray-500 text-sm">
              {/* {job.location} */}
              Helsinki, Finland
            </div>
          </div>
          <button className="rounded-full px-4 py-2 bg-black text-white text-sm h-fit">
            Details
          </button>
        </div>
        {job.perks && (
          <div className="md:flex hidden gap-2 md:mb-8 flex-wrap w-full">
            {job.perks.map((el: any, index: number) => (
              <div
                key={index}
                className="rounded-full px-2 text-xs font-light border border-gray-400 py-2"
              >
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPreview;
