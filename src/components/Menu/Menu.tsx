import { FC } from "react";
import type { UserType } from "types/types";
import UpMenu from "./UpMenu/UpMenu";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import DownMenu from "./DownMenu/DownMenu";
import "./Menu.scss";

// import NavLocation from "./UpMenu/NavLocation/NavLocation";

const Menu: FC<UserType> = (props) => {
  return (
    <nav id="Menu">
      <UpMenu />
      <MiddleMenu {...props} />
      <DownMenu />
      {/* <NavLocation /> */}
    </nav>
  );
};
export default Menu;
