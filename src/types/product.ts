export default interface Product {
  id?: string;
  name: string;
  unitmeasure: string;
  description?: string;
  quantity: number;
  price: number;
  imgurl?: string;
  category?: string;
  highlighted: boolean;
  created_at?: string;
  updated_at?: string;
}