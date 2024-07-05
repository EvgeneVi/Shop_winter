import { useState } from "react";
import "./ProductCard.scss";
function ProductCard({ img, title, text, price, newPrice }) {
  let Discounted = newPrice ? <span>{`${newPrice}₽`}</span> : "";

  const [active, setActive] = useState(false);
  const handleActive = () => setActive((prev) => !prev);
  return (
    <div className="product-card">
      <div className="product-card__wrap-img">
        <i
          className={`icon-favorite ${active ? "active" : ""}`}
          onClick={handleActive}
        ></i>
        <img className="product-card__image" src={img} alt="'" />
        <span>
          {newPrice ? `-${Math.floor((newPrice / price) * 100)} %` : ""}
        </span>
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
      <div className="product-card__price">
        <span>{price}</span>
        {Discounted}
      </div>
    </div>
  );
}
export default ProductCard;
