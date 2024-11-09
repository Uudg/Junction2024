// import { JobCard } from "./components/jobCard/JobCard"
// import { Stack } from "./components/jobCard/Stack"

import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { cloneElement } from "react";
import router from "./router";
import { PrivacyScreen } from "./components/privacyScreen/PrivacyScreen";

// const mockJobs = [
//   {
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
//     location: "Los Angeles, USA",
//     title: "Senior Developer",
//     postedAt: new Date(),
//     salary: 150000,
//     companyName: "Google Inc"
//   }
// ]

export default function App() {
  const element = useRoutes(router);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(element, { key: location.pathname })}
      <PrivacyScreen />
    </AnimatePresence>
    // <div className="flex w-full h-[100vh] bg-red-500">
    //   <Stack onVote={(item: any, vote: any) => console.log(item.props, vote)}>
    //     {mockJobs.map(job => <JobCard {...job} />)}
    //     <div data-value="waffles" className="w-52 h-64 flex justify-center items-center rounded-md bg-white">
    //       🧇
    //     </div>
    //     <div data-value="pancakes" className="w-52 h-64 flex justify-center items-center rounded-md bg-white">
    //       🥞
    //     </div>
    //     <div data-value="donuts" className="w-52 h-64 flex justify-center items-center rounded-md bg-white">
    //       🍩
    //     </div>
    //   </Stack>
    // </div>
    // <div className="h-screen w-screen">
    //     {/* <div className="gradient h-full w-full fixed top-0 left-0"></div> */}
    // </div>
  );
}
