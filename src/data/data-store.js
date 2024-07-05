export default class Data {
  _pathToImg = "/src/assets/img";

  getAllNewProd = () => [
    {
      id: 1,
      img: `${this._pathToImg}/supplies/snowboards/snowb1.png`,
      title: "LIB TECH",
      text: "Мужской Сноуборд",
      price: "34392",
      newPrice: "",
    },
    {
      id: 2,
      img: `${this._pathToImg}/supplies/snowboards/snowb2.png`,
      title: "LIB TECH",
      text: "Мужской Сноуборд",
      price: "34392",
      newPrice: "",
    },
    {
      id: 3,
      img: `${this._pathToImg}/supplies/snowboards/snowb3.png`,
      title: "LIB TECH",
      text: "Мужской Сноуборд",
      price: "34392",
      newPrice: "17392",
    },
    {
      id: 4,
      img: `${this._pathToImg}/supplies/skii/skii1.png`,
      title: "LIB TECH",
      text: "Мужские лыжи",
      price: "34392 ₽",
      newPrice: "",
    },
  ];

  getAllPopularProd = () => [
    {
      id: 1,
      img: `${this._pathToImg}/supplies/snowboards/snowb2.png`,
      title: "LIB TECH",
      text: "Мужской Сноуборд",
      price: "34392",
      newPrice: "17392",
    },
    {
      id: 2,
      img: `${this._pathToImg}/supplies/shoes/shoes.png`,
      title: "LIB TECH",
      text: "Мужские ботинки",
      price: "34392",
      newPrice: "17392",
    },
    {
      id: 3,
      img: `${this._pathToImg}/supplies/snowboards/snowb3.png`,
      title: "LIB TECH",
      text: "Мужской Сноуборд",
      price: "34392",
      newPrice: "",
    },
    {
      id: 4,
      img: `${this._pathToImg}/supplies/skii/skii1.png`,
      title: "LIB TECH",
      text: "Мужские лыжи",
      price: "34392 ₽",
      newPrice: "",
    },
  ];
  getPromoProduct = () => ({
    imgLogo: `${this._pathToImg}/brands/logo-promo.png`,
    img: `${this._pathToImg}/discounts/discount3.png`,
    title: "Название Акции",
    text: ` Меня не спрашивали, а надо было спросить, что означает имя Заратустры
    именно в моих устах — в устах первого имморалиста: ведь то, в чём
    состоит неслыханная уникальность этого перса в истории, являет собою
    противоположность как раз этому.`,
  });
  getBlogs = () => [
    {
      id: 1,
      img: `${this._pathToImg}/basic-bg/slide4.png`,
      nameCat: "Блоги",
      title: "Очень преочень длинное название блога",
      text: `Меня не спрашивали, а надо было спросить, что означает имя
      Заратустры именно в моих устах — в устах первого имморалиста:
      ведь то, в чём состоит неслыханная уникальность этого перса в
      истории, являет собою противоположность как раз этому.

      Меня неспрашивали, а надо было спросить, что означает имя Заратустры
      именно в моих устах — в устах первого имморалиста: ведь то, в
      чём состоит неслыханная уникальность этого перса в истории,
      являет собою противоположность как раз этому...`,
      url: "/#",
    },
    {
      id: 2,
      img: `${this._pathToImg}/basic-bg/slide5.png`,
      nameCat: "Блоги",
      title: "Очень преочень длинное название блога",
      text: `Меня не спрашивали, а надо было спросить, что означает имя
      Заратустры именно в моих устах — в устах первого имморалиста:
      ведь то, в чём состоит неслыханная уникальность этого перса в
      истории, являет собою противоположность как раз этому.

      Меня неспрашивали, а надо было спросить, что означает имя Заратустры
      именно в моих устах — в устах первого имморалиста: ведь то, в
      чём состоит неслыханная уникальность этого перса в истории,
      являет собою противоположность как раз этому...`,
      url: "/#",
    },
    {
      id: 3,
      img: `${this._pathToImg}/basic-bg/slide6.png`,
      nameCat: "Блоги",
      title: "Очень преочень длинное название блога",
      text: `Меня не спрашивали, а надо было спросить, что означает имя
      Заратустры именно в моих устах — в устах первого имморалиста:
      ведь то, в чём состоит неслыханная уникальность этого перса в
      истории, являет собою противоположность как раз этому.

      Меня неспрашивали, а надо было спросить, что означает имя Заратустры
      именно в моих устах — в устах первого имморалиста: ведь то, в
      чём состоит неслыханная уникальность этого перса в истории,
      являет собою противоположность как раз этому...`,
      url: "/#",
    },
    // {
    //   id: 4,
    //   img: `${this._pathToImg}/basic-bg/slide5.png`,
    //   nameCat: "Блоги",
    //   title: "Очень преочень длинное название блога",
    //   text: `Меня не спрашивали, а надо было спросить, что означает имя
    //   Заратустры именно в моих устах — в устах первого имморалиста:
    //   ведь то, в чём состоит неслыханная уникальность этого перса в
    //   истории, являет собою противоположность как раз этому.

    //   Меня неспрашивали, а надо было спросить, что означает имя Заратустры
    //   именно в моих устах — в устах первого имморалиста: ведь то, в
    //   чём состоит неслыханная уникальность этого перса в истории,
    //   являет собою противоположность как раз этому...`,
    //   url: "/#",
    // },
    // {
    //   id: 5,
    //   img: `${this._pathToImg}/basic-bg/slide5.png`,
    //   nameCat: "Блоги",
    //   title: "Очень преочень длинное название блога",
    //   text: `Меня не спрашивали, а надо было спросить, что означает имя
    //   Заратустры именно в моих устах — в устах первого имморалиста:
    //   ведь то, в чём состоит неслыханная уникальность этого перса в
    //   истории, являет собою противоположность как раз этому.

    //   Меня неспрашивали, а надо было спросить, что означает имя Заратустры
    //   именно в моих устах — в устах первого имморалиста: ведь то, в
    //   чём состоит неслыханная уникальность этого перса в истории,
    //   являет собою противоположность как раз этому...`,
    //   url: "/#",
    // },
  ];
}
