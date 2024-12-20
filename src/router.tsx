import { Outlet, RouteObject } from "react-router-dom";
import Jobs from "./pages/Jobs";
import TestProvider from "./pages/Test/TestProvider";
import TestWelcomePage from "./pages/TestWelcome";
import PretestOne from "./pages/pretestScreens/PretestOne";
import { PretestTwo } from "./pages/pretestScreens/PretestTwo";
import { PretestThree } from "./pages/pretestScreens/PretestThree";
import { TestFour } from "./pages/pretestScreens/TestFour";
import TestLayout from "./pages/Test";

const router: RouteObject[] = [
  {
    path: "/",
    element: (
      <TestProvider>
        <Outlet />
      </TestProvider>
    ),
    children: [
      {
        path: "",
        element: <TestWelcomePage />,
      },
      {
        path: "test",
        element: <TestLayout />,
        children: [
          {
            path: "one",
            element: <PretestOne />,
          },
          {
            path: "two",
            element: <PretestTwo />,
          },
          {
            path: "three",
            element: <PretestThree />,
          },
          {
            path: "four/:id",
            element: <TestFour />,
          },
          // {
          //     path: ":id",
          //     element: <MultipleChoiceQuestion/>
          // }
        ],
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
    ],
  },
];

export default router;
