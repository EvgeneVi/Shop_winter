import type { UserType } from "types/types";
import UpMenu from "./UpMenu/UpMenu";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import DownMenu from "./DownMenu/DownMenu";
import "./Menu.scss";

// import NavLocation from "./UpMenu/NavLocation/NavLocation";

const Menu = (props: UserType) => {
  return (
    <nav id="Menu">
      <button
        className="nav-burger-btn"
        onClick={({ target }) => {
          if (target instanceof HTMLElement)
            target.closest("button")?.classList.toggle("active");
        }}
      >
        <div className="nav-burger-btn__lines">
          <span></span>
        </div>
        <div className="nav-burger-btn__backdrop"></div>
      </button>
      <UpMenu />
      <MiddleMenu {...props} />
      <DownMenu />
    </nav>
  );
};

export default Menu;
