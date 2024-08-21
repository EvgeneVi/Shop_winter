// import { useEffect, useState } from "react";
import NavLocation from "../NavLocation/NavLocation.js";
import "./UpMenu.scss";

function UpMenu() {
  return (
    <div className="up-menu">
      <div className="up-menu__wrap">
        <NavLocation />
        <ul className="up-menu__conditions-list">
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
