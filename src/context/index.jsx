import { createContext, useState } from "react";

const stateCity = {
  city: "Санкт-Петербург",
};
// const store = { ...stateCity };

export const MainContext = createContext({
  ...stateCity,
  // ...store,
});

export const MainProvider = ({ children }) => {
  const [state, setState] = useState({ ...stateCity });
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
