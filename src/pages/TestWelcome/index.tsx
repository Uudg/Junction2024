import logo from "../../assets/logo.svg";
import nameLogo from "../../assets/CoreMatch_horizontal.svg";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const TestWelcomePage = () => {
    const navigate = useNavigate()

    const startTest = () => {
        navigate("/test/1")
    }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} alt="logo here" />
          <img src={nameLogo} alt="name logo here" />
        </div>
        <div className="avenir_font mt-2 text-3xl font-light">
          Discover Careers That Align With Your Values,
        </div>
        <div className="avenir_font text-3xl font-light border-b-2 border-black w-fit pb-4">
          Priorities, and Well-Being.
        </div>
        <Button className="mt-6 px-10" onClick={startTest}>Discover</Button>
      </div>
    </div>
  );
};

export default TestWelcomePage;
