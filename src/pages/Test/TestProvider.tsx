import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { get_questions, get_results_from_questions } from "../../api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

type ResponseType = Record<string, number>;
type QuestionType = {
  questionID: string;
  question: string;
};

const TestContext = createContext<any>(undefined);

const TestProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showSidebar = !location.pathname.split("/").includes("test");

  const { id } = useParams();

  // vse voprosi (10)
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<ResponseType[]>([]);

  // const next = useCallback(() => {
  //   if (!id) return navigate("/test/welcome");

  //   if (id && parseInt(id) < 10) {
  //     navigate(`/test/four/${parseInt(id) + 1}`);
  //   }

  //   if (id && parseInt(id) === 10) {
  //     navigate("/jobs");
  //   }
  // }, [id]);

  useEffect(() => {
    if (answers.length === 10) {
      getQuestionsResult();
    }
  }, [answers]);

  const handleSaveAnswer = useCallback((question: string, value: number) => {
    setAnswers([...answers, { [question]: value }]);
    if (Number(id) < 10) {
      navigate(`/test/four/${parseInt(id as string) + 1}`);
    } else {

    }
  }, [answers, id])

  const formatAnswers = (answersArray: any[]) => {
    return answersArray.reduce((acc, answer) => {
      const key = Object.keys(answer)[0];
      acc[key] = answer[key];
      return acc;
    }, {});
  };

  const getQuestionsResult = async () => {
    const formattedAnswers = formatAnswers(answers);
    const data = await get_results_from_questions({
      responses: formattedAnswers,
    });
    console.log(data);
  };

  const load_questions = async () => {
    const data = await get_questions();
    // asad nasral v response so need to convert the data
    const questionsArray = Object.keys(data).map((key) => ({
      questionID: key,
      question: data[key],
    }));
    setQuestions(questionsArray);
  };

  useEffect(() => {
    load_questions();
  }, []);

  return (
    <TestContext.Provider
      value={{
        questions,
        id,
        handleSaveAnswer,
      }}
    >
      <div className="gradient h-screen w-screen flex relative">
        {showSidebar ? (
          <div className="hidden md:block relative shrink-0 w-24">
            <Sidebar />
          </div>
        ) : null}
        <div className="w-full">{children}</div>
      </div>
    </TestContext.Provider>
  );
};

export default TestProvider;

export const useTest = () => {
  return useContext(TestContext);
};
