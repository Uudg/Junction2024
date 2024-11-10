import { Info } from "lucide-react";
import logo from "../../assets/logo.svg";
import nameLogo from "../../assets/logoName.svg";
import nameLogoHorizontal from "../../assets/logoName.svg";
import { cn } from "../../utils/cn";

export const Sidebar = () => {
  return (
    <>
      <aside className={cn("h-screen hidden w-24 lg:flex flex-col items-center bg-transparent justify-between py-4 border-r border-solid border-black absolute top-0 left-0")}>
        <div className="flex flex-col gap-2 items-center">
          <img src={logo} alt="logo here" />
          <img src={nameLogo} className="-rotate-90 mt-10" alt="name logo here" />
        </div>
        <Info size={35} strokeWidth={1.2} />
      </aside>
      <nav className="lg:hidden w-full fixed top-0 left-0 flex justify-between items-center p-3">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} alt="logo here" />
          <img
            src={nameLogoHorizontal}
            alt="name logo here"
            className="w-2/3"
          />
        </div>
        <Info size={35} strokeWidth={1.2} />
      </nav>
    </>
  );
};
