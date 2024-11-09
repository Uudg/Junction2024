import { Info } from "lucide-react";
import logo from "../../assets/logo.svg";
import nameLogo from "../../assets/CoreMatch_vertical.svg";

export const Sidebar = () => {
  return (
    <aside className="hidden h-screen w-full md:flex flex-col items-center bg-transparent justify-between py-4 border-r border-solid border-black absolute top-0 left-0">
      <div className="flex flex-col gap-2 items-center">
        <img src={logo} alt="logo here" />
        <img src={nameLogo} alt="name logo here" />
      </div>
      <Info size={35} />
    </aside>
  );
};
