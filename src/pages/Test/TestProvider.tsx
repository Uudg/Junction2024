import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {
    get_questions,
    get_results_from_questions
} from "../../api";
import { useNavigate, useParams } from "react-router-dom";

const TestContext = createContext<any>(undefined);

const TestProvider = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()

    // vse voprosi (10)
    const [questions, setQuestions] = useState<any[]>([]);

    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [
        answers,
        setAnswers
    ] = useState<any>([]);

    // here is how it is made by @asado to send the answers
    //     {
    //      "responses": {
    //          "Q1": 4,
    //          "Q2": 5,
    //          "Q3": 2,
    //          ...
    // }}
    // 

    const { id } = useParams();

    const next = async () => {

        if (!id) return navigate('/test/1')

        if (id && parseInt(id) < 10) {
            navigate(`/test/${parseInt(id) + 1}`);
        }

        if (id && parseInt(id) === 10) {
            navigate('/jobs')
        }
    }

    useEffect(() => {
        if (answers.length === 10) {
            getQuestionsResult()
        }
    }, [answers])

    const handleSaveAnswer = (question: any, value: number) => {
        setAnswers([...answers, { [question]: value }]);
        next();
    }

    const formatAnswers = (answersArray: any[]) => {
        return answersArray.reduce((acc, answer) => {
            const key = Object.keys(answer)[0];
            acc[key] = answer[key];
            return acc;
        }, {});
    };

    const getQuestionsResult = async () => {
        const formattedAnswers = formatAnswers(answers);
        const data = await get_results_from_questions({ responses: formattedAnswers });
        console.log(data);
        // handle the data as needed
    }

    useEffect(() => {
        if (questions.length > 0 && id) {
            setCurrentQuestion(questions[parseInt(id) - 1]);
        }
    }, [questions, id]);

    const load_questions = async () => {
        const data = await get_questions();
        // asad nasral v response so need to convert the data
        const questionsArray = Object.keys(data).map(key => ({
            questionID: key,
            question: data[key]
        }));
        setQuestions(questionsArray);
    };

    useEffect(() => {
        load_questions();
    }, []);

    useEffect(() => {
        console.log(answers)
    }, [answers])

    return (
        <TestContext.Provider value={{
            questions,
            currentQuestion,
            next,
            handleSaveAnswer,
        }}>
            {children}
        </TestContext.Provider>
    );
};

export default TestProvider;

export const useTest = () => {
    return useContext(TestContext);
};