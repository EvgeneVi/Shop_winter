import { FC } from "react";
import Button from "components/shared/Button/Button";
import ProductCard from "components/ProductCard/ProductCard";
import { ProductType } from "types/types";
import "./ProductCardsWrap.scss";

const obj: ProductType[] = [
  {
    id: 1,
    img: `/supplies/snowboards/snowb1.png`,
    title: "LIB TECH",
    text: "Мужской Сноуборд",
    price: 2,
  },
  {
    id: 2,
    img: `/supplies/snowboards/snowb2.png`,
    title: "LIB TECH",
    text: "Мужской Сноуборд",
    price: 1,
  },
];

const ProductCardsWrap: FC<ProductType[]> = ({ items }) => {
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
};
export default ProductCardsWrap;
