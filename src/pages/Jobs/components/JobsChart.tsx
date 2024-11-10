import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useTest } from "../../Test/TestProvider";
import { useEffect, useState } from "react";

const JobsChart = () => {
    const { results } = useTest();

    if (!results) return null;

    const [data, setData] = useState([]);

    useEffect(() => {
        if (results) {
            const chartData = results.job_matches
                .slice(0, 10)
                .map((feedback: any) => {
                    const score =
                        feedback.similarity_score < 0
                            ? 0
                            : feedback.similarity_score;
                    return {
                        subject: feedback.job_title,
                        value: score,
                    };
                });
            setData(chartData);
        }
    }, [results]);

    return (
        <div className="w-full h-1/2">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, results.job_matches[0].similarity_score]}
                    />
                    <Radar
                        dataKey="value"
                        stroke="#81c784"
                        fill="#81c784"
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default JobsChart;
