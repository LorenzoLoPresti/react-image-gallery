import { FC } from "react";
import { Artist } from "../../../services/apiImages";
import { QuestionCompoundProps } from "./PhotoDetailsTypes";
import { Body, Description, Title } from "./PhotoDetailsCompound";

type PhotoDetailsProps = {
  user: Artist;
  description: string;
  createdAt: string;
  onClose(): void;
};

const PhotoDetails: FC<PhotoDetailsProps> & QuestionCompoundProps = ({
  user,
  description,
  onClose,
  createdAt,
}: PhotoDetailsProps) => {
  const { name, instagram_username, location, bio } = user;

  return (
    <PhotoDetails.Body onClose={onClose}>
      <PhotoDetails.Title authorName={name} userName={instagram_username} />

      <PhotoDetails.Description data={createdAt} location={location} bio={bio}>
        {description}
      </PhotoDetails.Description>
    </PhotoDetails.Body>
  );
};

PhotoDetails.Body = Body;
PhotoDetails.Title = Title;
PhotoDetails.Description = Description;

export default PhotoDetails;
