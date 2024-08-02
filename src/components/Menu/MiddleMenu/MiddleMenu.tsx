import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./MiddleMenu.scss";
import logo from "assets/img/logo/logo.png";
import SearchBtn from "../SearchBtn/SearchBtn";
import CatOfPeople from "components/Categories/CatOfPeople/CatOfPeople";
import CatOfProducts from "components/Categories/CatOfProducts/CatOfProducts";
import NavLoginPanel from "../NavLoginPanel/NavLoginPanel";
import NavLocation from "../NavLocation/NavLocation";
import type { UserType } from "types/types";
import { SHOP_ROUTE } from "utils/constants";

const MiddleMenu = ({ user }: UserType) => {
  const NavLP = <NavLoginPanel user={user} />;
  return (
    <div className="middle-menu">
      {/* {console.log("render")} */}
      <div className="middle-menu__wrap">
        <button
          className="middle-menu__burger-btn"
          onClick={({ target }: MouseEvent) =>
            (target as Element).classList.toggle("active")
          }
        ></button>
        <div className="middle-menu__left-list">
          <CatOfPeople>
            <div className="middle-menu__drop">
              <aside>
                <CatOfProducts>
                  <i className="icon-array-right "></i>
                </CatOfProducts>
                {NavLP}
                <NavLocation />
              </aside>
            </div>
          </CatOfPeople>
        </div>
        <Link to={SHOP_ROUTE} className="middle-menu__logo-link">
          <img src={logo} className="middle-menu__logo"></img>
        </Link>
        <ul className="middle-menu__right-list">
          <li>{NavLP}</li>

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
      <div className="middle-menu__categories">
        <CatOfPeople />
      </div>
    </div>
  );
};
export default MiddleMenu;
