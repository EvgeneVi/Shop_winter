export default class Img {
  static url = (path, img) => new URL(`${path}${img}`, import.meta.url).href;
  static getAllfrom = (path, arr) => {
    let obj = {};
    arr.forEach((img) => {
      let key = img.replace("-", "_").match(/.+(?=\.)/g)?.[0];
      if (!key) return;
      obj[key] = this.url(path, img);
    });
    return obj;
  };
  static icons_messages = this.getAllfrom("./icons/messages/", [
    "twitter.png",
    "facebook.png",
    "twitch.png",
    "youtube.png",
    "instagram.png",
    "vk.png",
  ]);
  static icons_contacts = this.getAllfrom("./icons/contacts/", [
    "envelope-darkly.png",
    "envelope-large.png",
    "envelope.png",
    "send.png",
    "tel.png",
  ]);
  static img_basic_bg = this.getAllfrom("./basic-bg/", [
    "slide1.png",
    "slide2.png",
    "slide3.png",
    "slide4.png",
    "slide5.png",
    "slide6.png",
    "slide7.png",
    "slide8.png",
    "society1.png",
  ]);
  static img_footer = this.getAllfrom("./footer/", [
    "app-store.png",
    "footer-desk.png",
    "footer-mobile.png",
    "footer.png",
    "google-store.png",
    "QRcode.png",
  ]);
  static img_logo = this.getAllfrom("./logo/", [
    "logo.png",
    "logo2.png",
    "logo3.png",
  ]);
  static img_brands = this.getAllfrom("./brands/", [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "logo-promo.png",
  ]);
  // facebook: new URL('./icons/messages',import.meta.url),
}
