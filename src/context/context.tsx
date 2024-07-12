import { createContext, useState, FC } from "react";
import { ChildrenType } from "types/types";

type ProviderTypes = {
  state: any;
  setState: any;
};
type Store = {
  city: string;
};

// type ChildrenType = {
//   children: React.ReactNode;
// };
const stateCity = {
  city: "Санкт-Петербург",
};
// const store = { ...stateCity };

export const MainContext = createContext<ProviderTypes | Store>({
  ...stateCity,
  // ...store,
});

export const MainProvider: FC<ChildrenType> = ({ children }) => {
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
