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

type ResponseType = Record<string, number>[];

const TestContext = createContext<any>(undefined);

const TestProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [userLocation, setUserLocation] = useState<any>({
        contry: "USA",
        city: "NY",
    });
    const showSidebar = !location.pathname.split("/").includes("test");

    // vse voprosi (10)
    const [questions, setQuestions] = useState<any[]>([]);

    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [answers, setAnswers] = useState<ResponseType>([]);

    const [results, setResults] = useState<any>(null);

    const { id } = useParams();

    useEffect(() => {
        console.log(answers);
    }, [answers]);

    const next = useCallback(() => {
        if (!id) return navigate("/test/welcome");

        if (id && parseInt(id) < 10) {
            navigate(`/test/four/${parseInt(id) + 1}`);
        }

        if (id && parseInt(id) === 10) {
            navigate("/jobs");
        }
    }, [id]);

    useEffect(() => {
        // if (answers.length === 10) {
        if (location.pathname.split("/").includes("jobs")) {
            getQuestionsResult();
        }
    }, [answers]);

    const handleSaveAnswer = useCallback(
        (question: any, value: number) => {
            setAnswers([...answers, { [question]: value }]);
            next();
        },
        [answers]
    );

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
                results,
                location: userLocation,
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
