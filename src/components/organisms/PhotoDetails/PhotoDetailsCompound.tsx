import { FC } from "react";
import {
  DetailsBodyProps,
  DetailsDescriptionProps,
  DetailsTitleProps,
} from "./PhotoDetailsTypes";
import Text from "../../atoms/Text";
import { FaInstagram } from "react-icons/fa";
import DescriptionFields from "../../molecules/DescriptionFields";
import { formatStringDate } from "../../../utils/utils";

export const Body: FC<DetailsBodyProps> = ({ onClose, children }) => {
  return (
    <div className="w-[95%] sm:w-[80%] space-y-3 select-text relative">
      <Text
        onClick={onClose}
        className="inline-block p-3 cursor-pointer hover:translate-x-2 hover:text-primary"
      >
        &larr; Back
      </Text>
      {children}
    </div>
  );
};

export const Title: FC<DetailsTitleProps> = ({
  authorName,
  userName,
}: DetailsTitleProps) => {
  return (
    <Text as="h1" styledAs="h4">
      <b>Author</b>: <b className="text-primary">{authorName}</b>{" "}
      {userName && (
        <>
          <br className="md:hidden" />
          <a href={"https://instagram.com/" + userName} target="_blank">
            <FaInstagram className="inline mb-1 text-2xl ms-0 md:ms-5 text-dark" />
            /
            <span className="text-primary opacity-70 hover:opacity-100">
              {userName}
            </span>
          </a>
        </>
      )}
    </Text>
  );
};

export const Description: FC<DetailsDescriptionProps> = ({
  data,
  location,
  bio,
  children,
}: DetailsDescriptionProps) => {
  return (
    <>
      <DescriptionFields field="Description">{children}</DescriptionFields>
      <DescriptionFields field="Date">
        {formatStringDate(data)}
      </DescriptionFields>
      <DescriptionFields field="Location">{location}</DescriptionFields>
      <DescriptionFields field="Bio">{bio}</DescriptionFields>
    </>
  );
};
