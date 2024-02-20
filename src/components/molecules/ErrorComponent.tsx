import { FC } from "react";
import Text from "../atoms/Text";

const ErrorComponent: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-dark">
      <Text as="h2">Something goes wrong... 😢</Text>
    </div>
  );
};
export default ErrorComponent;
