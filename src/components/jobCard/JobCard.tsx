import { FC } from "react";

interface IJobCard {
    logo: string;
    location: string;
    title: string;
    postedAt: Date | string
    salary: number
    companyName: string;
}

export const JobCard: FC<Partial<IJobCard>> = ({ logo, location, title, salary, companyName, postedAt }) => {
    return (
        <div className="w-52 h-64 flex justify-center items-center rounded-md bg-white">
            {companyName}
        </div>
    )
}