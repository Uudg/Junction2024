import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { cloneElement, useEffect, useState } from "react";
import router from "./router";
import { PrivacyScreen } from "./components/privacyScreen/PrivacyScreen";
import loaderLogo from "./assets/matchio.svg";
import { AnimatedNameLogo } from "./assets/AnimatedNameLogo";

export default function App() {
  const element = useRoutes(router);
  const [loader, setLoader] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoader(false), 5200);
  }, []);

  const loaderComponent = (
    <div
      className="gradient w-full h-screen flex justify-center items-center absolute top-0 left-0 z-30"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      //   key="entroLogo"
    >
      <AnimatedNameLogo />
      {/* <motion.div>
        <motion.img src={loaderLogo} alt="Loader logo" />
      </motion.div> */}
    </div>
  );

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      <>{loader ? loaderComponent : element}</>
    </AnimatePresence>
  );
}
