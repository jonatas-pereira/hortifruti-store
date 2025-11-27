import Product from "@/types/product";

export default interface ProductContainerProps {
  category: string;
  products: Array<Product>;
}