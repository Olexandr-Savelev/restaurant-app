export interface Dish extends DishData {
  _id: string;
}
export interface DishData {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}
