import "./CatOfProducts.scss";
export default function CatOfProducts({ children, title, mobile, showMore }) {
  const list = {
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
  const mobileIs = mobile ? " mobile" : "";
  return (
    <div className={`cat-of-product ${mobileIs}`}>
      {title && <h2 className="cat-of-product__title">{title}</h2>}
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
            <a href={list[item].a}>{item}</a>
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
}
