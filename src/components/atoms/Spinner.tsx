import { FC } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Spinner: FC = () => {
  const classNames = `text-primary w-14 h-14 md:w-20 md:h-20 animate-spin`;

  return <BiLoaderAlt className={classNames} />;
};

export default Spinner;
