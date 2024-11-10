import { AnimatePresence } from "framer-motion";
import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "./router";
import { AnimatedNameLogo } from "./assets/AnimatedNameLogo";

export default function App() {
  const element = useRoutes(router);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    setTimeout(() => setLoader(false), 3200);
  }, []);

  const loaderComponent = (
    <div className="gradient w-full h-screen flex justify-center items-center absolute top-0 left-0 z-30">
      <AnimatedNameLogo />
    </div>
  );

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      <>{loader ? loaderComponent : element}</>
    </AnimatePresence>
  );
}
