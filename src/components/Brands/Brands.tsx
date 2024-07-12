import Img from "../../assets/img";
import "./Brands.scss";

export default function Brands() {
  return (
    <section className="brands">
      {Object.values(Img.img_brands).map((img, i) => (
        <img key={i} src={img} alt="" />
      ))}
    </section>
  );
}
