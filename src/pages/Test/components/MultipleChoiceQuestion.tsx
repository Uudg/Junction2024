import { useTest } from "../TestProvider";

const options = [
    {
        title: "Strongly Disagree",
        value: 1
    },
    {
        title: "Disagree",
        value: 2
    },
    {
        title: "Neutral",
        value: 3
    },
    {
        title: "Agree",
        value: 4
    },
    {
        title: "Strongly Agree",
        value: 5
    }
]

export const MultipleChoiceQuestion = () => {
    const { currentQuestion, handleSaveAnswer, answers } = useTest();

    // Find the answer for the current question
    const currentAnswer = answers && answers.find((answer: any) => answer[currentQuestion?.questionID]);

    return (
        <div className="h-screen w-screen flex items-center justify-center text-center">
            {
                currentQuestion && (
                    <div className="flex flex-col gap-2">
                        <h6 className="font-medium text-2xl test-question">
                            {currentQuestion.question}
                        </h6>
                        <div className="flex flex-col gap-4 mt-2">
                            {options.map((option, i) => (
                                <label key={i} className="flex gap-2 p-2 border rounded-md border-slate-400 cursor-pointer">
                                    <input
                                        value={option.value}
                                        type="radio"
                                        name={currentQuestion.questionID}
                                        checked={currentAnswer ? currentAnswer[currentQuestion.questionID] === option.value : false}
                                        onChange={(e) => handleSaveAnswer(currentQuestion.questionID, parseInt(e.target.value))}
                                    />
                                    {option.title}
                                </label>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MultipleChoiceQuestion;