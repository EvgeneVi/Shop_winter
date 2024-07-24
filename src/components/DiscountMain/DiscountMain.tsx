import "./DiscountMain.scss";
import ProductCardsWrap from "components/ProductCardsWrap/ProductCardsWrap";
import PromoProductItem from "components/PromoProductItem/PromoProductItem";
import Data from "data/data-store";

function DiscountMain() {
  const {
    getAllNewProd,
    getDiscountProducts,
    getPromoProduct,
    getAllPopularProd,
  } = new Data();

  const DiscItem = ({ img, title, href }: { [i: string]: string }) => (
    <div className="discounts-main__card-item">
      <div
        className="discounts-main__cards-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <a href={href}>
        <span className="discounts-main__cards-text">{title}</span>
      </a>
    </div>
  );
  return (
    <section className="discounts-main">
      <div className="discounts-main__cards">
        {getDiscountProducts().map((item, i) => (
          <DiscItem key={`${i}`} {...item} />
        ))}
      </div>
      <h1 className="title-center">Новинки</h1>
      <ProductCardsWrap items={getAllNewProd()} />

      <PromoProductItem {...getPromoProduct()} />
      <h1 className="title-center">DC Shoes популярное в коллекции</h1>
      <ProductCardsWrap items={getAllPopularProd()} />
    </section>
  );
}

export default DiscountMain;
