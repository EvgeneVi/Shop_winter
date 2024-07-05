import Brands from "../../components/Brands/Brands";
import DiscountMain from "../../components/DiscountMain/DiscountMain";
import SliderBlog from "../../components/Sliders/SliderBlog/SliderBlog";
import BenefitsBlock from "../../components/BenefitsBlock/BenefitsBlock";
import CatOfProducts from "../../components/Categories/CatOfProducts/CatOfProducts";
import SliderHome from "../../components/Sliders/SliderHome/SliderHome";

export default function Home() {
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
      <SliderBlog />
      <BenefitsBlock />
    </>
  );
}
