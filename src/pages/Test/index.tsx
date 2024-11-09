import { Outlet } from "react-router-dom";

const Test = () => {

    return (
        <div className="container mx-auto my-auto flex items-center justify-center h-screen gap-2">
            <Outlet />
        </div>
    );
};

export default Test;