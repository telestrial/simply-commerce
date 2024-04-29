import { ShoppingCartItem } from '../_types/shoppingCartItem';

export default function itemIndexFromCart(
  targetID: number,
  shoppingCartItems: ShoppingCartItem[]
) {
  let foundIndex = null;
  for (let i = 0; i < shoppingCartItems.length; i++) {
    const currentShoppingCartItem = shoppingCartItems[i];
    if (currentShoppingCartItem.id === targetID) {
      foundIndex = i;
    }
  }
  return foundIndex;
}
