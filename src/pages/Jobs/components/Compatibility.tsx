import best from "../../../assets/best.svg";
import strong from "../../../assets/strong.svg";

const types = {
    best: {
        icon: best,
        title: "A Perfect Match!",
        description:
            "This job aligns exceptionally well with your values, skills, and preferences.",
    },
    strong: {
        icon: strong,
        title: "A Strong Fit!",
        description:
            "This job matches well with your priorities and career goals.",
    },
};

const Compatibility = ({ type }: { type: "best" | "strong" }) => {
    return (
        <div
            className={`flex gap-2 rounded-2xl p-3 px-4 items-center ${
                type === "best" ? "bg-green-100" : "bg-yellow-100"
            }`}
        >
            <div className="icon p-2 flex items-center justify-center aspect-square">
                <img src={types[type].icon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-light">{types[type].title}</h3>
                <p className="text-xs font-light">{types[type].description}</p>
            </div>
        </div>
    );
};

export default Compatibility;
