import { ComponentProps, FC, PropsWithChildren } from "react";

type TextTags = "h1" | "h2" | "h4" | "h5" | "h6" | "p";

type TextColor = "white" | "secondary" | "dark" | "danger";

// Stile in base alla variante e al tag
const styles: Record<TextTags, string> = {
  h1: "text-h1r md:text-h1 leading-[1.2]",
  h2: "text-h2r md:text-h2 leading-[1.1]",
  h4: "text-h4r md:text-h4 leading-[1.1]",
  h5: "text-h5r md:text-h5 leading-[1.1]",
  h6: "text-h6",
  p: "text-lg leading-[1.6]",
};

// Stile in base al colore
const textColor: Record<TextColor, string> = {
  white: "text-white",
  secondary: "text-secondary",
  dark: "text-dark",
  danger: "text-danger",
};

// As indica il tag, styledAs indica come vogliamo stilizzare il componente:
// es: possiamo creare un tag "p" (as === "p") stilizzato come "h1" (styledAs === "h1")
type TextProps = PropsWithChildren<{
  as?: TextTags;
  styledAs?: TextTags;
  isBold?: boolean;
  color?: TextColor;
}> &
  ComponentProps<TextTags>;

const Text: FC<TextProps> = ({
  as = "p",
  styledAs = as,
  color = "dark",
  isBold,
  children,
  ...attributes
}: TextProps) => {
  // Creo un componente che ritornerà il tag as così da creare un tag
  // dinamico (as === "p" => <p></p>)
  const El = as;

  const { className: customClassName } = attributes;

  const classNames = `${styles[styledAs]} ${textColor[color]} ${
    isBold ? "font-bold" : ""
  } ${customClassName ? customClassName : ""}`;

  return (
    <El {...attributes} className={classNames}>
      {children}
    </El>
  );
};

export default Text;
