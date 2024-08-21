import { NavLink } from "react-router-dom";

import "./CatOfProducts.scss";
import { CATALOGUE_ROUTE } from "utils/constants";

type props = {
  showMore?: boolean;
};
type prodDataType = { a: string };
type prodListType = { [key: string]: prodDataType };

const CatOfProducts = ({ showMore }: props) => {
  const list: prodListType = {
    Новинки: { a: "#" },
    Сноуборд: { a: "#" },
    Лыжи: { a: "#" },
    Скейт: { a: "#" },
    Лонгборд: { a: "#" },
    Вейкборд: { a: "#" },
    Серф: { a: "#" },
    Sup: { a: "#" },
    Одежда: { a: "#" },
    Обувь: { a: "#" },
    Аксессуары: { a: "#" },
    Бренды: { a: "#" },
    Распродажа: { a: "#" },
  };
  return (
    <div data-count={Object.keys(list).length} className="cat-of-product">
      {showMore && (
        <>
          <input
            name="name"
            className="cat-of-product__show-more"
            type="checkbox"
          />
        </>
      )}
      <ul className={`cat-of-product__list`}>
        {Object.keys(list).map((item, i) => (
          <li key={i}>
            <NavLink to={`${CATALOGUE_ROUTE}${list[item].a}`}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatOfProducts;
