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

const TraitsChart = () => {
    const { results } = useTest();

    if (!results) return null;

    const [data, setData] = useState([]);

    useEffect(() => {
        if (results) {
            const chartData = results.traits
                .slice(0, 12)
                .map((feedback: any) => ({
                    subject: feedback.Trait,
                    value: feedback.Score,
                }));
            setData(chartData);
        }
    }, [results]);

    return (
        <div className="w-full h-1/2">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis />
                    <Radar
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TraitsChart;
