import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ButtonLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-100" />
    </div>
  );
};

export default ButtonLoader;
