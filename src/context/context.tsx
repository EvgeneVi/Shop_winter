import { createContext, useState } from "react";
import { ChildrenType } from "types/types";
import { stateType, ctxType } from "types/context-types";

// type ProviderTypes = {
//   state: any;
//   setState: any;
// };
// type Store = {
//   city: string;
// };

// const stateCity = {
//   city: "Санкт-Петербург",
// };

export const MainContext = createContext({});

export const MainProvider = ({ children }: ChildrenType) => {
  const [state, setState] = useState<stateType | null>(null);

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
// export type { ProviderTypes, Store };
