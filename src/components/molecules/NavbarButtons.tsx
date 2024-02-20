import Button from "../atoms/Button";
import { FaSun } from "react-icons/fa";

import { useAppContext } from "../../context/useAppContext";
import { useBackToMainPage } from "../../hooks/useBackToMainPage";
import { MdDarkMode } from "react-icons/md";
import { FC } from "react";

const NavbarButtons: FC = () => {
  const { dispatch, darkMode } = useAppContext();
  const { handleNavigate, isUserInPhotoPage } = useBackToMainPage();

  function handleToggleDarkMode() {
    dispatch({ type: "darkMode" });
  }
  return (
    <ul className="flex gap-1 md:gap-3">
      <li>
        <Button onClick={handleToggleDarkMode}>
          {darkMode ? <FaSun /> : <MdDarkMode />}
        </Button>
      </li>
      <li>
        <Button
          variant={isUserInPhotoPage ? "disabled" : "primary"}
          onClick={handleNavigate}
          disabled={isUserInPhotoPage}
        >
          Back
        </Button>
      </li>
    </ul>
  );
};

export default NavbarButtons;
