import { FC } from "react";
import Text from "../atoms/Text";

const NotFoundPage: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-center text-dark">
      <Text as="h2">404</Text>
      <Text as="h4">Page not found 😢</Text>
    </div>
  );
};
export default NotFoundPage;
