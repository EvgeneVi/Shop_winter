import "./Footer.scss";
import Img from "assets/img";
import SendMail from "components/shared/SendMail/SendMail";

// import SendMailInputDark from "../shared/SendMailInputDark/SendMailInputDark";

export default function Footer() {
  const {
    app_store,
    footer,
    footer_mobile,
    footer_desk,
    google_store,
    QRcode,
  } = Img.img_footer;
  const { logo3 } = Img.img_logo;
  const { envelope, tel } = Img.icons_contacts;
  // console.log(app_store, footer, google_store, QRcode);
  return (
    <footer
    // style={{
    //   background: `url(${footer_desk})  no-repeat top/contain`,
    // }}
    >
      <img
        className="footer-bg"
        src={footer_desk}
        srcSet={`${footer_mobile} 414w, ${footer_desk} 1680w`}
        sizes="(max-width: 414px) 414px"
        alt=""
      />
      <div className="footer-wrap">
        <div className="accsess-apps">
          <a className="accsess-apps__logo-link" href="#">
            <img className="accsess-apps__logo" src={logo3} alt="" />
          </a>

          <span
            data-mobiletext={"Подписывайся на нас"}
            className="accsess-apps__title"
          >
            Доступ к ранним релизам в приложении
          </span>
          <div className="accsess-apps__articles">
            {Object.values(Img.img_basic_bg)
              .slice(4, -1)
              .map((item, i) => (
                <a key={i} href="#">
                  <img src={item} alt="" />
                </a>
              ))}
          </div>
          <div className="accsess-apps__app-links-download">
            <a href="">
              <img src={app_store} alt="" />
            </a>
            <a href="">
              <img src={google_store} alt="" />
            </a>
            <img src={QRcode} alt="" className="accsess-apps__img-qrcode" />
          </div>
          <div className="accsess-apps__messages-links">
            {Object.values(Img.icons_messages).map((item, i) => (
              <a key={i} href="">
                <img src={item} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="contact-info">
          <span>Контакты</span>
          <div className="contact-info__tel">
            <img src={tel} alt="" />
            <span className="contact-info__number">8 (800) 511-74-68 </span>
            <span className="contact-info__tel-describe">
              Бесплатная горячая линия Ежедневно с 9 до 21
            </span>
          </div>
          <div className="contact-info__mail">
            <img src={envelope} alt="" />
            <span className="contact-info__adress">Контактный Email </span>
            <span className="contact-info__mail-describe">info@brd.ru</span>
          </div>
        </div>
        <div className="contact-nav-links">
          <span className="contact-nav-links__text">
            Подпишись на рассылку и получи <span>-10%</span> скидку
          </span>
          <SendMail classes={"dark"} />
          <nav>
            <ul>
              <li>
                <a href="">Помошь</a>
              </li>
              <li>
                <a href="">Доставка</a>
              </li>
              <li>
                <a href="">Оплата</a>
              </li>
              <li>
                <a href="">Возврат</a>
              </li>
              <li>
                <a href="">Отзывы (2290)</a>
              </li>
              <li>
                <a href="">Акции и скидки</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Компания</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
              <li>
                <a href="">О boardriders</a>
              </li>
              <li>
                <a href="">Вакансии</a>
              </li>
              <li>
                <a href="">Публичная сфера</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Boardriders Inc.</a>
              </li>
              <li>
                <a href="">Франчайзинг</a>
              </li>
              <li>
                <a href="">Quiksilver</a>
              </li>
              <li>
                <a href="">Roxy</a>
              </li>
              <li>
                <a href="">DC Shoes</a>
              </li>
              <li>
                <a href="">Boardriders Club</a>
              </li>
            </ul>
          </nav>
          <span className="contact-nav-links__copyright">
            © 2020 Brd.ru. Все права защищены
          </span>
        </div>
      </div>
    </footer>
  );
}
