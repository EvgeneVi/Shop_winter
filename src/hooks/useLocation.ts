import { useContext } from "react";
import { MainContext, Store } from "../context/context";

export default function useLocation() {
  const {
    state: { city },
    setState,
  } = useContext<any>(MainContext);
  console.log(useContext<any>(MainContext));
  const location = city;
  const setLocation = (val: string) => {
    setState((prev: Store) => ({ ...prev, city: val }));
  };
  return {
    location,
    setLocation,
  };
}
