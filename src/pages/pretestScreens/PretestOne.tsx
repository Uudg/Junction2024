import { FileText } from "lucide-react";
import { Button } from "../../components/button/Button";
import { Option } from "../../components/option/Option";
import { Link } from "react-router-dom";

const PretestOne = () => {
  return (
    <div className="w-full h-screen flex flex-col items-start justify-center max-w-5xl">
      <h1 className="avenir_font text-3xl">Welcome 👋</h1>
      <h5 className="avenir_font text-xl mt-8">Upload your CV 📃</h5>

      <div className="border rounded-xl border-dashed border-slate-400  w-full h-48 flex flex-col justify-center items-center mt-4">
        <FileText className=" text-slate-400" size={60} />
        <Button className="bg-slate-600 mt-2 w-1/4">Choose file +</Button>
        <p className="text-slate-500 text-sm mt-2">or drop files here</p>
      </div>

      <p className="avenir_font text-lg mt-10">Choose your highest achieved degree</p>
      <div className="w-full flex flex-row gap-4 mt-2 justify-start">
        <Option>🎒 High School</Option>
        <Option>🎓 Bachelor</Option>
        <Option>📝 Master</Option>
        <Option>🔬 PHD</Option>
      </div>

      <p className="avenir_font text-lg mt-10">Choose preferred type of work</p>
      <div className="w-full flex flex-row gap-4 mt-2 justify-start">
        <Option>Full-time</Option>
        <Option>Part-time</Option>
        <Option>Contract</Option>
        <Option>Internship</Option>
      </div>

      <Button className="mt-10 text-xl font-light">
        <Link to="/test/two">Next</Link>
      </Button>
    </div>
  );
};

export default PretestOne;
