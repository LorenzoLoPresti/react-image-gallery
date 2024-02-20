import { useContext } from "react";
import { AppContext } from "./appContextUtils";

// Ritorna il context se usato dentro il provider
// oppure lancia un errore se usato fuori da esso
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("context used outside from provider");

  return context;
}
