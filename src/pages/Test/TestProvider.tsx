import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { get_questions, get_results_from_questions } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

const TestContext = createContext<any>(undefined);

const TestProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState<any[]>([]);

    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [answers, setAnswers] = useState<any>([]);
    const [location] = useState<{
        country: string;
        city: string;
    }>({
        country: "USA",
        city: "NY",
    });

    const [results, setResults] = useState<any>(null);

    const { id } = useParams();

    const next = async () => {
        if (!id) return navigate("/test/1");

        if (id && parseInt(id) < 10) {
            navigate(`/test/${parseInt(id) + 1}`);
        }

        if (id && parseInt(id) === 10) {
            navigate("/jobs");
        }
    };

    useEffect(() => {
        if (answers.length === 10) {
            getQuestionsResult();
        }
    }, [answers]);

    const handleSaveAnswer = (question: any, value: number) => {
        setAnswers([...answers, { [question]: value }]);
        next();
    };

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
        setResults(data);
    };

    useEffect(() => {
        if (questions.length > 0 && id) {
            setCurrentQuestion(questions[parseInt(id) - 1]);
        }
    }, [questions, id]);

    const load_questions = async () => {
        const data = await get_questions();

        const questionsArray = Object.keys(data).map((key) => ({
            questionID: key,
            question: data[key],
        }));
        setQuestions(questionsArray);
    };

    useEffect(() => {
        load_questions();
    }, []);

    useEffect(() => {
        console.log(answers);
    }, [answers]);

    return (
        <TestContext.Provider
            value={{
                questions,
                currentQuestion,
                next,
                handleSaveAnswer,
                location,
                results,
            }}
        >
            <div className="gradient h-screen w-screen flex relative">
                <div className="hidden md:block relative shrink-0 w-24">
                    <Sidebar />
                </div>
                <div className="w-full">{children}</div>
            </div>
        </TestContext.Provider>
    );
};

export default TestProvider;

export const useTest = () => {
    return useContext(TestContext);
};
