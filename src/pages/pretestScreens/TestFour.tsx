import { Option } from "../../components/option/Option";
import { useTest } from "../Test/TestProvider";

export const TestFour = () => {
    const { currentQuestion, handleSaveAnswer, answers } = useTest();

    // Find the answer for the current question
    const currentAnswer = answers && answers.find((answer: any) => answer[currentQuestion?.questionID]);

    console.log(currentQuestion);

    if (!currentQuestion) return "No questions"

  return (
    <div className="w-full h-screen flex flex-col items-start justify-center max-w-5xl">
      <h1 className="avenir_font text-3xl font-semibold">
        Psychometric Assessment Test 📝
      </h1>
      <h5 className="avenir_font text-xl mt-6">
        Take this test to assess your skills, personality, and work preferences
        for better job matching.
      </h5>

      <h5 className="avenir_font text-xl mt-12 text-center w-full">
        "{currentQuestion.question}"
      </h5>
      <div className="w-full flex flex-row gap-4 mt-2 justify-center mt-4">
        <Option>⛔ Strongly disagree</Option>
        <Option>🙅‍♂️ Disagree</Option>
        <Option>😐 Neutral</Option>
        <Option>👍 Agree</Option>
        <Option>✅ Strongly agree</Option>
      </div>

      {/* <Button className="mt-10 text-xl font-light">Next</Button> */}
    </div>
  );
};
