import { createContext } from "react";
import { ImageObjectInterface } from "../services/apiImages";

export type Action = { type: "darkMode" };

export interface ValueInterface {
  darkMode: boolean;
  images: ImageObjectInterface[];
  isLoading: boolean;
  error: Error | null;
  dispatch: React.Dispatch<Action>;
}

export interface InitialStateInterface {
  darkMode: boolean;
}

// se l'utente ha la darkMode di default la abilita
export const initialState: InitialStateInterface = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark").matches,
};

// Context dell'applicazione
export const AppContext = createContext<ValueInterface>({
  darkMode: initialState.darkMode,
  images: [],
  isLoading: false,
  error: null,
  dispatch: () => {},
});
