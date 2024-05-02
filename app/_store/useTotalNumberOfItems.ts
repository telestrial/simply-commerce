import { useShoppingCart } from './store';

export function useTotalNumberOfItems() {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);
  return shoppingCart.reduce((prev, curr) => prev + curr.numberOfItems, 0);
}
