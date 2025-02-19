import "./MiddleMenu.scss";
import logo from "../../../assets/img/logo/logo.png";
import SearchBtn from "../SearchBtn/SearchBtn";
import CatOfPeople from "../../Categories/CatOfPeople/CatOfPeople";
import CatOfProducts from "../../Categories/CatOfProducts/CatOfProducts";
import NavLoginPanel from "../NavLoginPanel/NavLoginPanel";
import NavLocation from "../NavLocation/NavLocation.jsx";

function MiddleMenu({ user }) {
  const NavLP = <NavLoginPanel user={user} />;
  // console.log(NavLP);
  return (
    <div className="middle-menu">
      {/* {console.log("render")} */}
      <div className="middle-menu__wrap">
        <button
          className="middle-menu__burger-btn"
          onClick={(e) => e.target.classList.toggle("active")}
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
        <a className="middle-menu__logo-link" href="#">
          <img src={logo} className="middle-menu__logo"></img>
        </a>
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
}
export default MiddleMenu;
