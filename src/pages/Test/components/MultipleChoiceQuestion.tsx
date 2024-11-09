import { useTest } from "../TestProvider";

// mock because asad
const mock_options = [
    {
        option: "Option 1",
        value: false
    },
    {
        option: "Option 2",
        value: true
    },
    {
        option: "Option 3",
        value: false
    },
    {
        option: "Option 4",
        value: false
    }
]

export const MultipleChoiceQuestion = () => {

    const {currentQuestion} = useTest();

    return (
        <div className="h-screen w-screen flex items-center justify-center text-center">
            {
                currentQuestion && (
                    <div className="flex flex-col gap-2">
                        {currentQuestion.question}
                        <div className="flex flex-col gap-4">
                            {mock_options.map(option => (
                                <div key={option.option} className="p-2 border">
                                    {option.option}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MultipleChoiceQuestion;