import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
// import { Input } from "../../components/input/Input";
import { motion } from "framer-motion";
import { Select } from "../../components/select/Select";
import { useCallback, useState } from "react";

const benefitsOptions = [
  { value: "free_beer", label: "Free beer" },
  { value: "free_zaza", label: "Free zaza" },
];

const teamSizeOptions = [
  { value: "1", label: "> 10 people" },
  { value: "2", label: "20-50" },
  { value: "3", label: "50-100" },
  { value: "4", label: "100+ people" },
];

const salaryOptions = [
  { value: "1", label: "Linear" },
  { value: "2", label: "Exponential" },
];

const autonomyOptions = [
  { value: "1", label: "Team player" },
  { value: "2", label: "Zaza player" },
];

const cultureOptions = [
  { value: "1", label: "Uzbeki" },
  { value: "2", label: "Kazahi" },
];

export const PretestThree = () => {
  const [benefits, setBenefits] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [autonomy, setAutonomy] = useState<string>("");
  const [culture, setCulture] = useState<string>("");

  const handleBenefit = useCallback((newVal: string) => setBenefits(newVal), [])
  const handleTeam = useCallback((newVal: string) => setTeam(newVal), [])
  const handleSalary = useCallback((newVal: string) => setSalary(newVal), [])
  const handleAutonomy = useCallback((newVal: string) => setAutonomy(newVal), [])
  const handleCulture = useCallback((newVal: string) => setCulture(newVal), [])

  return (
    <motion.div
      className="w-full h-screen flex flex-col items-start justify-center max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="avenir_font text-3xl font-semibold">
        Filters and Preferences 📁
      </h1>

      <h5 className="avenir_font text-xl mt-6">Select the benefits</h5>
      {/* <Input className="w-full md:w-4/5 mt-2" placeholder="Preferred benefits" /> */}
      <Select options={benefitsOptions} value={benefits} onChange={handleBenefit} />
      <h5 className="avenir_font text-xl mt-8">Select the team size</h5>
      <Select options={teamSizeOptions} value={team} onChange={handleTeam} />
      {/* <Input className="w-full md:w-4/5 mt-2" placeholder="Team size" /> */}
      <h5 className="avenir_font text-xl mt-8">Preferred salary progression</h5>
      {/* <Input className="w-full md:w-4/5 mt-2" placeholder="Choose salary progression" /> */}
      <Select options={salaryOptions} value={salary} onChange={handleSalary} />
      <h5 className="avenir_font text-xl mt-8">Professional autonomy</h5>
      {/* <Input className="w-full md:w-4/5 mt-2" placeholder="Preferred autonomy" /> */}
      <Select options={autonomyOptions} value={autonomy} onChange={handleAutonomy} />
      <h5 className="avenir_font text-xl mt-8">Office culture</h5>
      {/* <Input className="w-full md:w-4/5 mt-2" placeholder="Select office culture" /> */}
      <Select options={cultureOptions} value={culture} onChange={handleCulture} />

      <Link to="/test/four/1">
        <Button className="mt-10 text-xl font-light">Next</Button>
      </Link>
    </motion.div>
  );
};
