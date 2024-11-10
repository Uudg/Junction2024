import logo from "../../assets/logo.svg";
import nameLogo from "../../assets/logoName.svg";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const TestWelcomePage = () => {
  return (
    <motion.div className="gradient w-full h-screen flex flex-col justify-center items-center" initial={{opacity: 0}} animate={{ opacity: 1 }}>
      <div className="flex flex-col px-8 md:px-0">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} alt="logo here" />
          {/* <AnimatedNameLogo /> */}
          <img src={nameLogo} alt="name logo here" />
        </div>
        <div className="avenir_font mt-2 text-3xl font-light">
          Discover Careers That Align With Your Values,
        </div>
        <div className="avenir_font text-3xl font-light border-b-2 border-black w-fit pb-4">
          Priorities, and Well-Being.
        </div>
        <Button className="mt-6 px-10">
          <Link to="/test/one">Discover</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default TestWelcomePage;
