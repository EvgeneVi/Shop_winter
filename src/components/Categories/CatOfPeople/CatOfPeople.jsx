// import { NavLink } from "react-router-dom";
import "./CatOfPeople.scss";
export default function CatOfPeople({ children }) {
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
}
