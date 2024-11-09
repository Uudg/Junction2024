import { Bookmark, Image } from "lucide-react";
import { useEffect, useState } from "react";

const getRandomSoftColor = () => {
    const colors = [
        'bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

const JobPreview = ({ job }: any) => {
    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        setBgColor(getRandomSoftColor());
    }, []);

    return (
        <div className="gap-2 col-span-1 flex flex-col bg-white p-2 border border-gray-300 rounded-xl">
            <div className={`flex flex-col ${bgColor} rounded-xl p-4 gap-8`}>
                <div className="flex justify-between">
                    <div className="bg-white p-2 px-3 text-sm flex items-center rounded-full">
                        date ?????
                    </div>
                    <div className="bg-white rounded-full p-3">
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
                {job.perks && <div className="flex gap-2 mb-8 flex-wrap w-full">
                    {
                        job.perks.map((el: any, index: number) => (
                            <div key={index} className="rounded-full px-4 text-sm font-light border border-gray-400 py-1">
                                {el}
                            </div>
                        ))
                    }
                </div>}
            </div>
            <div className="flex justify-between px-4 items-center">
                <div className="flex flex-col">
                    <div className="font-bold">
                        {job.salary_range}
                    </div>
                    <div className="text-gray-500 text-sm">
                        {/* {job.location} */}
                        Helsinki, Finland
                    </div>
                </div>
                <button className="rounded-full px-4 py-2 bg-black text-white text-sm h-fit">
                    Details
                </button>
            </div>
        </div>
    )
}

export default JobPreview;