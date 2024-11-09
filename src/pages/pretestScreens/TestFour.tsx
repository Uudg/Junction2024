import { useTest } from "../Test/TestProvider";

const options = [
    {
        title: "⛔ Strongly disagree",
        value: 1,
    },
    {
        title: "🙅‍♂️ Disagree",
        value: 2,
    },
    {
        title: "😐 Neutral",
        value: 3,
    },
    {
        title: "👍 Agree",
        value: 4,
    },
    {
        title: "✅ Strongly Agree",
        value: 5,
    },
];

export const TestFour = () => {
    const { id, questions, handleSaveAnswer } = useTest();

    const foundQuestion = questions[id - 1];

    if (!foundQuestion) return "No questions";

    return (
        <div className="w-full h-screen flex flex-col items-start justify-center max-w-5xl">
            <h1 className="avenir_font text-3xl font-semibold">
                Psychometric Assessment Test 📝
            </h1>
            <h5 className="avenir_font text-xl mt-6">
                Take this test to assess your skills, personality, and work
                preferences for better job matching.
            </h5>

            <h5 className="avenir_font text-xl mt-12 text-center w-full">
                "{foundQuestion.question}"
            </h5>
            <div className="w-full flex flex-row gap-4 justify-center mt-4">
                {options.map((option, i) => (
                    <div
                        key={i}
                        className="avenir_font bg-white border border-slate-300 py-2 px-6 flex gap-2 items-center whitespace-nowrap cursor-pointer rounded-xl"
                        onClick={() =>
                            handleSaveAnswer(
                                foundQuestion.questionID,
                                option.value
                            )
                        }
                    >
                        {option.title}
                    </div>
                ))}
            </div>
        </div>
    );
};
