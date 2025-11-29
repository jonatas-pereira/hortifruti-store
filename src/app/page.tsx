import ProductsContainer from "@/components/products-container/products-container";
import Container from "@/components/container/container";
import Devider from "@/components/devider/devider";

export default async function Home() {

  const hortalica = await fetch(`${process.env.DOMAIN}/api/products?category=hortalicas&highlighted=true`)
    .then(data => data.json())
    .then(res => res.data as Array<{id: number, name: string, unitmeasure: string, price: number, imgurl: string}>)

  return (
    <div>
      <Container>
        { hortalica.length > 0 && <Devider msg="Hortaliças" /> } 
        { hortalica.length > 0 && <ProductsContainer category="hortalicas" products={hortalica}/> }
      </Container>
    </div>
  );
}
