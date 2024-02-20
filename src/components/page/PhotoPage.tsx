import { FC, useEffect } from "react";
import PhotoDetails from "../organisms/PhotoDetails/PhotoDetails";
import Loader from "../molecules/Loader";
import ErrorComponent from "../molecules/ErrorComponent";
import ImgNavigation from "../organisms/ImgNavigation";

import { useImage } from "../../hooks/useImage";
import { Navigate } from "react-router";
import { useSearchParams, useNavigate } from "react-router-dom";
import Container from "../atoms/Container";

// Con useImage setto l'index come
// searchParam
const PhotoPage: FC = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const numericId = id ? +id : null;
  const {
    error, // error di TanStack Query
    indexImg, // index dell'immagine
    images, // array di immagini
    isLoading, // isLoading di TanStack Query
    nextImg, // fn per passare alla prossima img
    prevImg, // precedente img
    isOpen: isDetailsOpen, // i dettagli sono aperti
    handleOpen, // apre/chiude i dettagli
  } = useImage(numericId || 0);

  useEffect(
    function () {
      // Quando indexImg cambia setto il nuovo
      // param
      params.set("id", String(indexImg));
      setParams(params);

      // se premo -> o <- cambia immagine
      // se premo Esc esce dai dettagli se aperti
      // altrimenti torna alla main page
      function handleKeyUp(e: KeyboardEvent): void {
        if (e.key === "ArrowLeft") prevImg();
        if (e.key === "ArrowRight") nextImg();
        if (e.key === "Escape" && isDetailsOpen) {
          handleOpen();
        } else if (e.key === "Escape" && !isDetailsOpen) {
          navigate("/photo");
        }
      }

      document.addEventListener("keyup", handleKeyUp);

      // rimuovo l'evento all'unmount
      return () => document.removeEventListener("keyup", handleKeyUp);
    },
    [
      indexImg,
      params,
      setParams,
      prevImg,
      nextImg,
      isDetailsOpen,
      handleOpen,
      navigate,
    ]
  );

  // Render/guard condizionali
  if (!images || !id) return <Navigate to="/" />;
  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent />;

  // Immagine attuale
  const image = images[indexImg];

  return (
    <div className="relative flex items-center justify-center flex-grow">
      {isDetailsOpen ? (
        // dettagli
        <Container isDetails>
          <PhotoDetails
            description={image.description}
            user={image.user}
            createdAt={image.created_at}
            onClose={handleOpen}
          />
        </Container>
      ) : (
        // immagine
        <ImgNavigation
          src={image?.urls.regular}
          handleOpen={handleOpen}
          nextImg={nextImg}
          prevImg={prevImg}
        />
      )}
    </div>
  );
};

export default PhotoPage;
