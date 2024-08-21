import CatOfProducts from "components/Categories/CatOfProducts/CatOfProducts";
import CatOfPeople from "components/Categories/CatOfPeople/CatOfPeople";

import "./DownMenu.scss";
function DownMenu() {
  return (
    <div className="down-menu">
      <div className="down-menu__wrap">
        <CatOfProducts />
        <CatOfPeople />
      </div>
    </div>
  );
}
export default DownMenu;
