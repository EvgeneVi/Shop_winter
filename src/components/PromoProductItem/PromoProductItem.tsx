import "./PromoProductItem.scss";

export default function PromoProductItem({
  item: { imgLogo, img, title, text },
}) {
  return (
    <div className="promo-product-item">
      <i
        style={{ backgroundImage: `url(${imgLogo})` }}
        className="promo-product-item_brand-logo"
      ></i>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="promo-product-item_img"
      ></div>
      <span className="promo-product-item_name">{title}</span>
      <p className="promo-product-item_text">{text}</p>
    </div>
  );
}
