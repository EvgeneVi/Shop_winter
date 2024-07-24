import "./BenefitsBlock.scss";
import Img from "assets/img";
import Button from "../shared/Button/Button";
import SendMail from "components/shared/SendMail/SendMail";

export default function BenefitsBlock() {
  const { logo2 } = Img.img_logo,
    { envelope_large } = Img.icons_contacts,
    { slide1, society1 } = Img.img_basic_bg;
  return (
    <section className="benefits-block">
      <div
        className="benefits-block__item"
        style={{
          backgroundImage: `url(${society1})`,
        }}
      >
        <i
          className="benefits-block__icon benefits-block__icon-logo2"
          style={{ background: `url(${logo2}) no-repeat bottom / contain` }}
        ></i>
        <h1>Программа лояльности</h1>
        <p>Зарабатывайте баллы и получайте преимущества</p>
        <Button classes={"benefits-block__btn-join black-border"}>
          Вступить в клуб
        </Button>
      </div>
      <div
        className="benefits-block__item"
        style={{ backgroundImage: `url(${slide1})` }}
      >
        <i
          className="benefits-block__icon benefits-block__icon-convert"
          style={{
            background: `url(${envelope_large}) no-repeat bottom `,
          }}
        ></i>
        <h1 data-mobiletxt="ДОПОЛНИТЕЛЬНО">
          Скидка -10% <span className="title-for-mobile">Скидка -15%</span>
        </h1>
        <p>За подписку на наши новости</p>
        <SendMail classes="bright" text="Email" />
      </div>
    </section>
  );
}
