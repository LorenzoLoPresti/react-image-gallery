import { PropsWithChildren, FC, ComponentProps } from "react";

// Determino il tipo delle varianti di stile del bottone
type ButtonVariant = "primary" | "secondary" | "disabled";

// Seleziono uno stile in base alla variante, selezionando
// la proprietà di styles attraverso bracket notation (styles[variant])
const generalStyle =
  "border-primary opacity-80 hover:opacity-100 hover:-translate-y-1";
const styles: Record<ButtonVariant, string> = {
  primary: `bg-primary ${generalStyle}"`,
  secondary: `bg-secondary ${generalStyle}`,
  disabled: "bg-primary opacity-40 hover:opacity-40 cursor-not-allowed",
};

// Tipo delle props del bottone: variant, children e permetto di utilizzare
// tutte le proprietà di "button" quando creo una nuova istanza di questo componente
type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
}> &
  ComponentProps<"button">;

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...attributes // tutte le proprietà di "button"
}: ButtonProps) => {
  // estraggo disabled e className per poterli utilizzare come condizioni
  // di stile
  const { disabled, className: customClassName } = attributes;

  const classNames = `text-lg text-white min-h-[45px] py-2 px-4 md:min-h-[48px] md:px-5 border-2 rounded-full ${
    styles[variant]
  } ${disabled ? styles.disabled : ""} ${
    customClassName ? customClassName : ""
  }`;

  return (
    <button {...attributes} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
