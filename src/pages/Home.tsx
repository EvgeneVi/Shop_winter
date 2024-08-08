import DiscountMain from "components/DiscountMain/DiscountMain";
import Brands from "components/Brands/Brands";
import SliderBlog from "components/Sliders/SliderBlog/SliderBlog";
import BenefitsBlock from "components/BenefitsBlock/BenefitsBlock";
import CatOfProducts from "components/Categories/CatOfProducts/CatOfProducts";
import SliderHome from "components/Sliders/SliderHome/SliderHome";
import { json, Outlet, useLoaderData, useParams } from "react-router";
import { data_catPeople } from "data/data-catPeople";

export const getCatPeople = (url: string) => {
  const res = data_catPeople[url];
  if (!res)
    throw json(
      { message: "Возможно вы ошиблись, такой страницы не существует" },
      { status: 404 }
    );
  return true;
};

export default function Home() {
  const data = useLoaderData();
  // throw new Error("s");
  return (
    <>
      <SliderHome />
      <CatOfProducts
        mobile={true}
        showMore={true}
        title={"Популярные категории"}
      />
      <Brands />
      <DiscountMain />
      {/* <SliderBlog /> */}
      <BenefitsBlock />
      <Outlet />
    </>
  );
}
