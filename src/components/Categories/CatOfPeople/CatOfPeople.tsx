// import { NavLink } from "react-router-dom";
import { FC } from "react";
import { ChildrenType } from "types/types";
import "./CatOfPeople.scss";

const CatOfPeople: FC<ChildrenType> = ({ children }) => {
  const leftPart = [
    { text: "Мужчинам", active: true },
    { text: "Женщинам", active: false },
    { text: "Детям", active: false },
  ];
  return (
    <>
      <ul className="cat-of-people">
        {leftPart.map(({ text, active }, i) => (
          <li key={i} className={active ? "active" : ""}>
            <a href="###">{text}</a>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
};
export default CatOfPeople;
