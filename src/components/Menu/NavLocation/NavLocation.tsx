import useLocation from "../../../hooks/useLocation";
import "./NavLocation.scss";
export default function NavLocation() {
  const { location } = useLocation();
  return (
    <ul className="nav-location">
      <li>
        <i className="icon-local"></i>
        <div className="nav-location__btn">
          {location?.length < 12 && (
            <span className="nav-location__text">Ваш регион доставки:</span>
          )}
          <span className="nav-location__name-city">{location || ""}</span>
          <i className="icon-array"></i>
        </div>
      </li>
      <li>
        <a href="#">Магазины</a>{" "}
      </li>
      <li>
        <a href="#">Помошь</a>
      </li>
      <li>
        <a href="#">Блоги</a>
      </li>
    </ul>
  );
}
