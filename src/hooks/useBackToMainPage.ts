import { useLocation, useNavigate } from "react-router-dom";

// Fa tornare alla mainPage
// se serve si può rendere riutilizzabile
// passando una stringa come parametro che indica
// il path
export const useBackToMainPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isUserInPhotoPage = pathname === "/photo";

  function handleNavigate(): void {
    if (isUserInPhotoPage) return;

    navigate("/");
  }
  return { isUserInPhotoPage, handleNavigate };
};
