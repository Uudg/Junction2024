import { Link, Outlet, useLocation } from "react-router-dom";
import picOne from "../../assets/stepper_one.svg";
import picTwo from "../../assets/stepper_two.svg";
import picThree from "../../assets/stepper_three.svg";
import picFour from "../../assets/stepper_four.svg";
import { Info } from "lucide-react";
import logo from "../../assets/logo.svg";
import nameLogo from "../../assets/logoName.svg";

const steppers: Record<string, string> = {
  one: picOne,
  two: picTwo,
  three: picThree,
  four: picFour,
};

const TestLayout = () => {
  const location = useLocation();

  const currentPath = location.pathname.split("/")[2];

  return (
    <div className="my-auto flex items-center justify-center h-screen gap-2 relative">

      <div className="lg:container lg:pr-[30rem] mx-auto w-full md:w-3/4 pt-24 px-4 md:px-0 lg:pt-20 customColorBg">
        <Outlet />
      </div>

      <aside className="hidden absolute right-0 top-0 w-[30rem] h-screen bg-white lg:flex items-center justify-center border-l border-gray-300">
        <div className="h-full flex items-center justify-center p-2">
          <img src={steppers[currentPath]} alt="Stepper" />
        </div>
      </aside>

      <div className="absolute top-0 left-0 w-full h-20 flex justify-between items-center bg-white px-10 py-6 border-b border-gray-300">
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="logo here" />
          <img src={nameLogo} alt="name logo here" />
        </Link>
        <Info size={35} />
      </div>

    </div>
  );
};

export default TestLayout;
