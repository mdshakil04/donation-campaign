import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" pb-8 text-center justify-center items-center w-full h-full ">
            <h1 className="mb-12 mt-48 font-extrabold text-4xl text-center text-amber-400">OPS!! Page Not Found <br />404</h1>
            <Link to="/"><span className=" text-2xl  bg-[#009444] text-white p-2 rounded-md">Go Home</span></Link>
        </div>
    );
};

export default ErrorPage;