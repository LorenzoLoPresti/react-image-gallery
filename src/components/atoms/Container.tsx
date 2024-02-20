import { ComponentProps, FC, PropsWithChildren } from "react";
import Section from "./Section";

type Container = PropsWithChildren<{
  isDetails?: boolean;
}> &
  ComponentProps<"section">;

const Container: FC<Container> = ({
  isDetails,
  children,
  ...attributes
}: Container) => {
  const { className: customClassName } = { ...attributes };
  const classNames = `${
    isDetails ? "min-h-[80vh] p-2 md:py-5 pb-8" : "min-h-[50vh] p-4 md:p-5"
  } mx-auto w-full max-w-[90vw] md:max-w-[1024px] bg-bg-container rounded-3xl  flex justify-center items-center ${
    customClassName ? customClassName : ""
  }`;

  return (
    <Section {...attributes} className={classNames}>
      {children}
    </Section>
  );
};
export default Container;
