import Data from "../../../data/data-store";
import CustomSlider from "../CustomSlider/CustomSlider";
import "./SliderBlog.scss";

export default function SliderBlog() {
  const { getBlogs } = new Data();
  const Slides = getBlogs().map(({ id, img, nameCat, title, text, url }) => {
    return (
      <li key={id} className="slider-blog__item">
        <div className="slider-blog__content">
          <img src={img} className="slider-blog__img" />
          <div className="slider-blog__play"></div>
        </div>
        <div className="slider-blog__discription">
          <span
            data-mobiletext="Новые статьи"
            className="slider-blog__category"
          >
            {nameCat}
          </span>
          <a
            data-mobiletext="Смотреть все статьи"
            className="slider-blog__all-categories"
            href=""
          >
            Все блоги
          </a>
          <h1 className="slider-blog__title">{title}</h1>
          <div className="slider-blog__text">
            <p>{text}</p>
          </div>

          <a className="slider-blog__all-text" href={url}>
            Читать продолжение
          </a>
        </div>
      </li>
    );
  });
  return (
    // <section className="slider-blog">
    <CustomSlider classes={"slider-blog"} durucation={0.5}>
      {Slides}
    </CustomSlider>

    /* <ul className="slider-blog__wrap">{Slides}</ul> */
    // </section>
  );
}
