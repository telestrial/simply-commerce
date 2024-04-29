import { Product } from './product';

export interface ShoppingCartItem extends Product {
  numberOfItems: number;
}
