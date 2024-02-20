import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";
import { useBackToMainPage } from "../../hooks/useBackToMainPage";

const Title: FC<PropsWithChildren> = ({ children }) => {
  const { handleNavigate, isUserInPhotoPage } = useBackToMainPage();

  const classNames = isUserInPhotoPage
    ? ""
    : "hover:text-primary hover:-translate-y-1 cursor-pointer";

  return (
    <Text
      as="h1"
      styledAs="h4"
      color="dark"
      onClick={handleNavigate}
      className={classNames}
    >
      {children}
    </Text>
  );
};

export default Title;
