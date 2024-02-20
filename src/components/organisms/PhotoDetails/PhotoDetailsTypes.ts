import { PropsWithChildren } from "react";

export type DetailsBodyProps = PropsWithChildren<{
  onClose(): void;
}>;

export type DetailsTitleProps = {
  authorName: string;
  userName: string;
};

export type DetailsDescriptionProps = PropsWithChildren<{
  data: string;
  location: string;
  bio: string;
}>;

export type QuestionCompoundProps = {
  Title: React.FC<DetailsTitleProps>;
  Description: React.FC<DetailsDescriptionProps>;
  Body: React.FC<DetailsBodyProps>;
};
