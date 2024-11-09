import { createBrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Jobs/>
    },
    {
        path: "/jobs",
        element: <Jobs/>
    }
])

export default router;