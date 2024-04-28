import { Product } from './product';

interface ShoppingCartItem extends Product {
  numberOfItems: number;
}
