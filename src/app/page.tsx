import ProductsContainer from "@/components/products-container/products-container";
import Container from "@/components/container/container";
import Devider from "@/components/devider/devider";
import BannerSection from "@/components/banner/banner-section";
import Product from "@/types/product";
import { bannerImgArray } from "@/mocks/banner-img-array";

export default async function Home() {

  const firstSectionReq = await fetch(`${process.env.DOMAIN || "http://localhost:3000"}/api/products?category=hortaliça`)
  const firstSectionData: Product[] = await firstSectionReq.json().then(res => res.data)

  const secondSectionReq = await fetch(`${process.env.DOMAIN || "http://localhost:3000"}/api/products?category=vegetal`)
  const secondSectionData: Product[] = await secondSectionReq.json().then(res => res.data)

  return (
    <div>
      <Container>
        <BannerSection photos={bannerImgArray}/>
        { firstSectionData.length > 0 && <Devider msg="Hortaliças" /> } 
        { firstSectionData.length > 0 && <ProductsContainer category="hortaliças" products={firstSectionData}/> }
        { secondSectionData.length > 0 && <Devider msg="Vegetais" />}
        { secondSectionData.length > 0 && <ProductsContainer category="vegetais" products={secondSectionData}/>}
      </Container>
    </div>
  );
}
