import { createBrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";
import App from "./App";
import Test from "./pages/Test";
import MultipleChoiceQuestion from "./pages/Test/components/MultipleChoiceQuestion";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/test/",
        element: <Test/>,
        children: [
            {
                // first page where we define level or etc, not decided yet
                path: "welcome",
            },
            {
                path: ":id",
                element: <MultipleChoiceQuestion/>
            }
        ]
    },
    {
        path: "/jobs",
        element: <Jobs/>
    }
])

export default router;