// import { useEffect, useState } from "react";
import NavLocation from "../NavLocation/NavLocation.jsx";
import "./UpMenu.scss";

function UpMenu() {
  // const [media, setMedia] = useState(matchMedia("(min-width: 1200px)"));
  // const changeSizeWindow = (e) => setMedia(e.matches);
  // useEffect(() => {
  //   if (media?.media) {
  //     media.onchange = changeSizeWindow;
  //     setMedia(media.matches);
  //   }
  //   console.log("use", media);
  // }, []);

  return (
    <div className="up-menu">
      <div className="up-menu__wrap">
        {/* {media === true && <NavLocation />} */}
        <NavLocation />
        <ul className="up-menu__right">
          <li>
            <i className="icon-delivery"></i>
            <a href="#">Бесплатная доставка*</a>
          </li>
          <li>
            <i className="icon-pay"></i>
            <a href="#">Оплата при получении</a>
          </li>
          <li>
            <i className="icon-return"></i>
            <a href="#">Возврат в течение 14 дней</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default UpMenu;
