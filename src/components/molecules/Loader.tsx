import { FC } from "react";
import Spinner from "../atoms/Spinner";

const Loader: FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
};
export default Loader;
