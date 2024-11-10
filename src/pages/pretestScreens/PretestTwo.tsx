import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { motion } from "framer-motion"

export const PretestTwo = () => {
  return (
    <motion.div className="w-full h-screen flex flex-col items-start justify-center max-w-5xl" initial={{opacity: 0}} animate={{ opacity: 1 }}>
      <h1 className="avenir_font text-3xl font-semibold">Industry and Job Location📍</h1>
      
      <h5 className="avenir_font text-xl mt-6">
        Select the industry field that suits you the best
      </h5>
      <Input className="w-full md:w-4/5 mt-2" placeholder="Preferred industry" />
      <h5 className="avenir_font text-xl mt-8">
        Select the location where you want to explore job opportunities
      </h5>
      <Input className="w-full md:w-4/5 mt-2" placeholder="Find the location" />

      <Button className="mt-10 text-xl font-light">
        <Link to="/test/three">Next</Link>
      </Button>
    </motion.div>
  );
};
