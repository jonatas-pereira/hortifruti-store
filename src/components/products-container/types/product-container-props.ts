import Product from "@/types/product";

export default interface ProductContainerProps {
  category: string;
  products: Array<{id: number, name: string, unitmeasure: string, price: number, imgurl: string}>;
}