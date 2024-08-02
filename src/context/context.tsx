import { createContext, useState, FC } from "react";
import { ChildrenType } from "types/types";

type ProviderTypes = {
  state: any;
  setState: any;
};
type Store = {
  city: string;
};

const stateCity = {
  city: "Санкт-Петербург",
};

export const MainContext = createContext<ProviderTypes | Store>({
  ...stateCity,
  // ...store,
});

export const MainProvider = ({ children }: ChildrenType) => {
  const [state, setState] = useState<Store>({ ...stateCity });

  return (
    <MainContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export type { ProviderTypes, Store };
