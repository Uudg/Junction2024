import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
