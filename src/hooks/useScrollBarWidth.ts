import { useRef } from "react";

export const useScrollBarWidth = () => {
  const dom: React.MutableRefObject<boolean | HTMLDivElement> = useRef(false);
  if (dom.current === true) return;

  dom.current = document.createElement("div");
  dom.current.style.width = "100px";
  dom.current.style.overflow = "scroll";
  dom.current.style.position = "absolute";
  dom.current.style.visibility = "hidden";
  document.body.prepend(dom.current);

  const { offsetWidth, clientWidth } = dom.current;

  dom.current.remove();
  dom.current = true;

  return `${offsetWidth - clientWidth}px`;
};
