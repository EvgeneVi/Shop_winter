import "./ProductCardsWrap.scss";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../shared/Button/Button";

function ProductCardsWrap({ items }) {
  const ProductCards = items.map((item) => {
    const { id, img, title, text, price, newPrice } = item;
    return (
      <ProductCard
        key={id}
        img={img}
        title={title}
        text={text}
        price={price}
        newPrice={newPrice}
      />
    );
  });
  return (
    <>
      <div className="product-cards">{ProductCards}</div>
      <Button classes={"product-cards__btn-show btn-custom black"}>
        Показать больше
      </Button>
    </>
  );
}
export default ProductCardsWrap;
