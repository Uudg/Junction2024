import { Outlet } from "react-router-dom";
import { useTest } from "./TestProvider";

const Test = () => {
    const { next } = useTest();

    return (
        <div className="container mx-auto my-auto flex items-center justify-center h-screen gap-2">
            <Outlet />
            {/* кнопка чисто потестить */}
            <button className="p-2 border w-full flex items-center justify-center" onClick={next}>
                Continue
            </button>
        </div>
    );
};

export default Test;