import "./DiscountMain.scss";
import disc1 from "../../assets/img/discounts/discount1.png";
import disc2 from "../../assets/img/discounts/discount2.png";
import Data from "../../data/data-store.js";
import ProductCardsWrap from "../ProductCardsWrap/ProductCardsWrap";
import PromoProductItem from "../PromoProductItem/PromoProductItem.jsx";

// import disc3 from "../../assets/img/discounts/discount3.png";
function DiscountMain() {
  const { getAllNewProd, getPromoProduct, getAllPopularProd } = new Data();

  return (
    <section className="discounts-main">
      <div className="discounts-main__cards">
        <div className="discounts-main__card-item">
          <div
            className="discounts-main__cards-image"
            style={{ backgroundImage: `url(${disc1})` }}
          ></div>
          <span className="discounts-main__cards-text">Название акции №1</span>
        </div>
        <div className="discounts-main__card-item">
          <div
            className="discounts-main__cards-image"
            style={{ backgroundImage: `url(${disc2})` }}
          ></div>
          <span className="discounts-main__cards-text">Название акции №2</span>
        </div>
      </div>
      <h1 className="title-center">Новинки</h1>
      <ProductCardsWrap items={getAllNewProd()} />
      <PromoProductItem item={getPromoProduct()} />
      <h1 className="title-center">DC Shoes популярное в коллекции</h1>
      <ProductCardsWrap items={getAllPopularProd()} />
    </section>
  );
}

export default DiscountMain;
