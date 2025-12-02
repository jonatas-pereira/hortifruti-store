import ProductsContainer from "@/components/products-container/products-container";
import Container from "@/components/container/container";
import Devider from "@/components/devider/devider";
import BannerSection from "@/components/banner/banner-section";

export default async function Home() {

  const hortalica = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?category=hortalicas&highlighted=true`, { cache: 'no-store' })
    .then(data => data.json())
    .then(res => res.data as Array<{id: number, name: string, unitmeasure: string, price: number, imgurl: string}>)

  return (
    <div>
      <Container>
        <BannerSection />
        <Devider msg="Hortaliças" /> 
        <ProductsContainer category="hortalicas" products={hortalica}/>
      </Container>
    </div>
  );
}
