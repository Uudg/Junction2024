import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {
    get_questions,
    // get_results_from_questions
} from "../../api";
import { useNavigate, useParams } from "react-router-dom";

const TestContext = createContext<any>(undefined);

const TestProvider = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()

    // vse voprosi (10)
    const [questions, setQuestions] = useState<any[]>([]);

    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [
        // answers,
        // setAnswers
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

    const next = () => {

        if (!id) return navigate('/test/1')

        if (id && parseInt(id) < 10) {
            navigate(`/test/${parseInt(id) + 1}`);
        }

        if (id && parseInt(id) === 10) {
            navigate('/jobs')
        }
    }

    // to get answers from the multiple choice questions
    // ya hz gde our swipe questions so far, use mock for them to render and operate 
    // const getQuestionsResult = async () => {
    //     const data = await get_results_from_questions(answers)
    // }

    useEffect(() => {
        console.log(id)
        if (questions.length > 0 && id) {
            setCurrentQuestion(questions[parseInt(id) - 1]);
        }
    }, [questions, id]);

    const load_questions = async () => {
        const data = await get_questions();
        // asad nasral v response so need to convert the data
        // also net answerov so he needs to update them
        // afterwards add options to questionsArray to return in 
        // multiple choice questions
        const questionsArray = Object.keys(data).map(key => ({
            questionID: key,
            question: data[key]
        }));
        setQuestions(questionsArray);
    };

    useEffect(() => {
        load_questions();
    }, []);

    return (
        <TestContext.Provider value={{
            questions,
            currentQuestion,
            next
        }}>
            {children}
        </TestContext.Provider>
    );
};

export default TestProvider;

export const useTest = () => {
    return useContext(TestContext);
};