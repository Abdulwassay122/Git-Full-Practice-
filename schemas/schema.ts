export type User = {
  id: string;
  name: string;
  password: string;
  age: number;
};
export type Product = {
  id: string;
  name: string;
  price: string;
  age: number;
};
export type Order = {
  id: string;
  product_id: string;
  user_id: string;
};
export type Review = {
  id: string;
  product_id: string;
  user_id: string;
  rating: number
};
export type Cart = {
  id: string;
  product_id: string;
  user_id: string;
  quantity: number
};
