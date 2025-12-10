import ProductsContainer from "@/components/products-container/products-container";
import Container from "@/components/container/container";
import Devider from "@/components/devider/devider";
import BannerSection from "@/components/banner/banner-section";
import FindProductsProps from "@/interfaces/findProducts";

export default async function Home() {

  const hortalica = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?category=hortalicas&highlighted=true`, { cache: 'no-store' })
    .then(data => data.json())
    .then(res => res.data as FindProductsProps[])

  const verduras = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?category=verduras&highlighted=true`, {cache: 'no-store'})
    .then(data => data.json())
    .then(res => res.data as FindProductsProps[])

  const frutas = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?category=frutas&highlighted=true`, { cache: 'no-store'})
    .then(data => data.json())
    .then(res => res.data as FindProductsProps[])
  
  return (
    <div>
      <Container>
        <BannerSection />
        <Devider msg="Hortaliças" /> 
        <ProductsContainer category="hortalicas" products={hortalica}/>
        <Devider msg="Verduras"/>
        <ProductsContainer category="verduras" products={verduras}/>
        <Devider msg="Frutas"/>
        <ProductsContainer category="frutas" products={frutas}/>
      </Container>
    </div>
  );
}
