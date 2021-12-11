import { CheckCircleIcon } from "@heroicons/react/solid";
import colors from "../config/colors";

function Benefit({ benefit, single }) {
  return (
    <a
      className={`flex flex-col justify-center items-center p-6 bg-black shadow-md border border-gray-700 rounded-lg ${
        single ? "w-3/4" : "w-60"
      } m-4`}
    >
      <CheckCircleIcon className="h-6 w-6 mb-2" color={colors.primary} />
      <h5 className="font-bold text-2xl tracking-tight mb-2">{benefit}</h5>
    </a>
  );
}

export default Benefit;
