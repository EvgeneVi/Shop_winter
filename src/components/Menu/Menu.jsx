import UpMenu from "./UpMenu/UpMenu";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import DownMenu from "./DownMenu/DownMenu";
import "./Menu.scss";
// import NavLocation from "./UpMenu/NavLocation/NavLocation";

function Menu(props) {
  return (
    <nav id="Menu">
      <UpMenu />
      <MiddleMenu {...props} />
      <DownMenu />
      {/* <NavLocation /> */}
    </nav>
  );
}
export default Menu;
