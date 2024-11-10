import { CircleX, FileText } from "lucide-react";
import { Button } from "../../components/button/Button";
import { Option } from "../../components/option/Option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

const PretestOne = () => {
  const [myFiles, setMyFiles] = useState<any>(null)

  const onDrop = useCallback((acceptedFiles: any) => {
    setMyFiles(acceptedFiles)
  }, [myFiles])

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const selectedFile = myFiles? myFiles[0] as File : null

  return (
    <motion.div
      className="w-full h-screen flex flex-col items-start justify-center max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="avenir_font text-3xl">Welcome 👋</h1>
      <h5 className="avenir_font text-xl mt-4 md:mt-6 lg:mt-8">
        Upload your CV 📃
      </h5>

      <div className="border rounded-xl border-dashed border-slate-400  w-full h-48 flex flex-col justify-center items-center mt-4">
        {selectedFile ? (
          <div className="flex gap-2 justify-center items-center">
            <p className="text-slate-500 text-sm">
              Selected file: {selectedFile.name}
            </p>
            <div
              className="rounded-full bg-gray-200 cursor-pointer"
              onClick={() => setMyFiles(null)}
            >
              <CircleX className="text-gray-500" />
            </div>
          </div>
        ) : (
          <>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} accept="application/pdf" />
              <div className="w-full flex flex-col justify-center items-center">
                <FileText className=" text-slate-400" size={60} />
                <Button className="bg-slate-600 mt-2 w-fit">
                  Choose file +
                </Button>
                <p className="text-slate-500 text-sm mt-2">
                  or drop files here
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <p className="avenir_font text-lg mt-10">
        Choose your highest achieved degree
      </p>
      <div className="w-full flex flex-row gap-2 lg:gap-4 mt-2 justify-start flex-wrap">
        <Option>🎒 High School</Option>
        <Option>🎓 Bachelor</Option>
        <Option>📝 Master</Option>
        <Option>🔬 PHD</Option>
      </div>

      <p className="avenir_font text-lg mt-10">Choose preferred type of work</p>
      <div className="w-full flex flex-row gap-2 lg:gap-4 mt-2 justify-start flex-wrap">
        <Option>Full-time</Option>
        <Option>Part-time</Option>
        <Option>Contract</Option>
        <Option>Internship</Option>
      </div>

      <Button className="mt-10 text-xl font-light">
        <Link to="/test/two">Next</Link>
      </Button>
    </motion.div>
  );
};

export default PretestOne;
