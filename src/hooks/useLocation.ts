import { useContext } from "react";
import { stateType, ctxType } from "types/context-types";
import { MainContext } from "../context/context";

export default function useLocation() {
  const { state, setState } = useContext<any>(MainContext);
  // console.log(useContext<any>(MainContext));
  const location = state?.city;
  const setLocation = (val: string) => {
    setState((prev: stateType) => ({ ...prev, city: val }));
  };
  return {
    location,
    setLocation,
  };
}
