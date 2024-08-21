import { Link } from "react-router-dom";
import "./MiddleMenu.scss";
import logo from "assets/img/logo/logo.png";
import SearchBtn from "../SearchBtn/SearchBtn";
import CatOfPeople from "components/Categories/CatOfPeople/CatOfPeople";
import NavLoginPanel from "../NavLoginPanel/NavLoginPanel";
import type { UserType } from "types/types";
import { SHOP_ROUTE } from "utils/constants";

const MiddleMenu = ({ user }: UserType) => {
  return (
    <div className="middle-menu">
      <div className="middle-menu__wrap">
        <div className="middle-menu__categories">
          <CatOfPeople />
        </div>
        <Link to={SHOP_ROUTE} className="middle-menu__logo-link">
          <img src={logo} className="middle-menu__logo"></img>
        </Link>
        <NavLoginPanel user={user} />

        <ul className="middle-menu__user-options">
          <li>
            <a href="#">
              <i className="icon-favorites"></i>
              Избранное
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-trash"></i>
              Корзина
            </a>
          </li>
        </ul>
        <SearchBtn />
      </div>
    </div>
  );
};
export default MiddleMenu;
