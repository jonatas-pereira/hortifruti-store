import ProductsContainer from "@/components/products-container/products-container";
import Container from "@/components/container/container";
import Devider from "@/components/devider/devider";
import BannerSection from "@/components/banner/banner-section";

import { Products } from "@/mocks/products-mock"
import { bannerImgArray } from "@/mocks/banner-img-array";

export default function Home() {
  return (
    <div>
      <Container>
        <BannerSection photos={bannerImgArray}/>
        <Devider msg="Hortaliças" />
        <ProductsContainer category="hortaliças" products={Products}/>
        <Devider msg="Vegetais" />
        <ProductsContainer category="vegetais" products={Products}/>
      </Container>
    </div>
  );
}
