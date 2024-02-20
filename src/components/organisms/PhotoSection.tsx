import { FC } from "react";
import AsyncImage from "../molecules/AsyncImage";
import Loader from "../molecules/Loader";
import ErrorComponent from "../molecules/ErrorComponent";

import { ImageObjectInterface } from "../../services/apiImages";
import { useAppContext } from "../../context/useAppContext";
import Container from "../atoms/Container";

const classNames =
  "grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6";

const PhotoSection: FC = () => {
  const { error, images, isLoading } = useAppContext();

  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent />;

  return (
    <Container className={classNames}>
      {images.map((image: ImageObjectInterface, index) => (
        <AsyncImage image={image} key={image.id} index={index} />
      ))}
    </Container>
  );
};

export default PhotoSection;
