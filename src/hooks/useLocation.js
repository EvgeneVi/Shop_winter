import { useContext } from "react";
import { MainContext } from "../context";

export default function useLocation() {
  const {
    state: { city },
    setState,
  } = useContext(MainContext);

  const location = city;
  const setLocation = (val) => {
    setState((prev) => ({ ...prev, city: val }));
  };
  return {
    location,
    setLocation,
  };
}
