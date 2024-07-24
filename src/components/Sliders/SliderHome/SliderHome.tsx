import Img from "assets/img/";
import CustomSlider from "../CustomSlider/CustomSlider";
import "./SliderHome.scss";

export default function SliderHome() {
  return (
    <CustomSlider
      classes={"advertising-slide"}
      infinity={true}
      durucation={0.5}
      buttonsCheckSlides={true}
    >
      {Object.values(Img.img_basic_bg)
        .slice(0, 2)
        .map((img, i) => (
          <li key={i} className="advertising-slide__item">
            <img className="advertising-slide__img" src={img} alt="" />
            <div className="advertising-slide__text">
              <span>Winter sale до -70%</span>
            </div>
          </li>
        ))}
    </CustomSlider>
  );
}
