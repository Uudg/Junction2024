import { Option } from "../../components/option/Option";
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
        Take this test to assess your skills, personality, and work preferences
        for better job matching.
      </h5>

      <p className="mt-12 text-gray-500 text-sm">Q{id} of 10</p>
      <h5 className="avenir_font font-bold italic text-xl mt-2 text-center w-full">
        "{foundQuestion.question}"
      </h5>
      <div className="w-full flex flex-row gap-2 justify-center mt-4 flex-wrap">
        {options.map((option, i) => (
          <Option
            key={i}
            onClick={() =>
              handleSaveAnswer(foundQuestion.questionID, option.value)
            }
          >
            {option.title}
          </Option>
        ))}
      </div>
    </div>
  );
};
