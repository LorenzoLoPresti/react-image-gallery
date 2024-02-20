import { FC, PropsWithChildren, useReducer } from "react";
import { getImages } from "../services/apiImages";
import { useQuery } from "@tanstack/react-query";
import {
  Action,
  AppContext,
  InitialStateInterface,
  ValueInterface,
  initialState,
} from "./appContextUtils";

// Funzione reducer per useReducer
function reducer(
  state: InitialStateInterface,
  action: Action
): InitialStateInterface {
  switch (action.type) {
    case "darkMode":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}

// Provider
const AppContextProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const [{ darkMode }, dispatch] = useReducer(reducer, initialState);

  // Get di TanStack Query
  // Ritorna i dati, isLoading e error
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  // Value del context
  const value: ValueInterface = {
    darkMode,
    images,
    isLoading,
    error,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
