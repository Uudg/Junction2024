import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { motion } from "framer-motion"
import { Select } from "../../components/select/Select";

export const PretestThree = () => {
  return (
    <motion.div className="w-full h-screen flex flex-col items-start justify-center max-w-5xl" initial={{opacity: 0}} animate={{ opacity: 1 }}>
      <h1 className="avenir_font text-3xl font-semibold">
        Filters and Preferences 📁
      </h1>

      <h5 className="avenir_font text-xl mt-6">Select the benefits</h5>
      {/* <Multiselect /> */}
      <Input className="w-full md:w-4/5 mt-2" placeholder="Preferred benefits" />
      <h5 className="avenir_font text-xl mt-8">Select the team size</h5>
      <Select />
      {/* <Input className="w-full md:w-4/5 mt-2" placeholder="Team size" /> */}
      <h5 className="avenir_font text-xl mt-8">Preferred salary progression</h5>
      <Input className="w-full md:w-4/5 mt-2" placeholder="Choose salary progression" />
      <h5 className="avenir_font text-xl mt-8">Professional autonomy</h5>
      <Input className="w-full md:w-4/5 mt-2" placeholder="Preferred autonomy" />
      <h5 className="avenir_font text-xl mt-8">Office culture</h5>
      <Input className="w-full md:w-4/5 mt-2" placeholder="Select office culture" />

      <Button className="mt-10 text-xl font-light">
        <Link to="/test/four/1">Next</Link>
      </Button>
    </motion.div>
  );
};
