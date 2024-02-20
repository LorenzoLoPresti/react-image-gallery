import { FC } from "react";
import Image from "../atoms/Image";
import ImgNavigationButton from "../molecules/ImgNavigationButton";

type ImgNavigationProps = {
  src: string;
  nextImg(): void;
  prevImg(): void;
  handleOpen(): void;
};

// Componente che mostra l'immagine selezionata
// nella main page e permette di andare
// alla precedente o successiva.
// Cliccando sull'immagine si mostrano i dettagli
const ImgNavigation: FC<ImgNavigationProps> = ({
  src,
  handleOpen,
  nextImg,
  prevImg,
}) => {
  return (
    <>
      {/* <Image
        src={src}
        className="max-h-[400px] sm:max-h-[600px] 2xl:max-h-[800px] cursor-pointer"
        onClick={handleOpen}
      /> */}
      <Image
        src={src}
        className="object-contain max-h-[85vh] cursor-pointer"
        onClick={handleOpen}
      />
      <ImgNavigationButton direction="right" onClick={nextImg} />
      <ImgNavigationButton direction="left" onClick={prevImg} />
    </>
  );
};
export default ImgNavigation;
