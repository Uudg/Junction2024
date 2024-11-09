import { createBrowserRouter, Outlet } from "react-router-dom";
import Jobs from "./pages/Jobs";
import App from "./App";
import Test from "./pages/Test";
import MultipleChoiceQuestion from "./pages/Test/components/MultipleChoiceQuestion";
import TestProvider from "./pages/Test/TestProvider";
import TestWelcomePage from "./pages/TestWelcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TestProvider>
                    <Outlet/>
                </TestProvider>,
        children: [
            {
                path: "test",
                element: <Test/>,
                children: [
                    {
                        // first page where we define level or etc, not decided yet
                        path: "welcome",
                        element: <TestWelcomePage />
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
        ]
    },
])

export default router;