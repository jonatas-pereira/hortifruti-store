import ProductsContainer from "@/components/products-container/products-container";
import Container from "@/components/container/container";
import Devider from "@/components/devider/devider";

import { Products } from "@/mocks/products-mock"

export default function Home() {
  return (
    <div>
      <Container>
        <Devider msg="Hortaliças" />
        <ProductsContainer category="hortaliças" products={Products}/>
        <Devider msg="Vegetais" />
        <ProductsContainer category="vegetais" products={Products}/>
      </Container>
    </div>
  );
}
