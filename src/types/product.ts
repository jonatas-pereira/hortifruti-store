export default interface Product {
  id?: string;
  name: string;
  price: number;
  img: string;
  category: string;
  highlighted: boolean;
  created_at?: string;
  updated_at?: string;
}