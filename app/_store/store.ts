import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Product } from '../_types/product';
import { ShoppingCartItem } from '../_types/shoppingCartItem';

import itemIndexFromCart from './itemIndexFromCart';

export interface ShoppingCartState {
  shoppingCart: ShoppingCartItem[];
  resetShoppingCart: () => void;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (product: Product) => void;
}

export const useShoppingCart = create<ShoppingCartState>()(
  immer((set) => ({
    shoppingCart: [],
    resetShoppingCart: () =>
      set(() => ({
        shoppingCart: [],
      })),
    addItemToCart: (product) =>
      set((state) => {
        // Create a ref of our shoppingCartItems
        const modifiedShoppingCart = state.shoppingCart;
        // Check if the item we want to add is in the cart already or not
        const foundShoppingCartItemIndex = itemIndexFromCart(
          product.id,
          modifiedShoppingCart
        );

        // If it is in the cart, increase the numberOfItems by 1
        if (foundShoppingCartItemIndex !== null) {
          modifiedShoppingCart[foundShoppingCartItemIndex].numberOfItems =
            modifiedShoppingCart[foundShoppingCartItemIndex].numberOfItems + 1;
        } else {
          // If not, add to the shoppingCartItems
          modifiedShoppingCart.push({ ...product, numberOfItems: 1 });
        }
      }),

    removeItemFromCart: (product) =>
      set((state) => {
        // Create a ref of our shoppingCartItems
        const modifiedShoppingCart = state.shoppingCart;
        // Check if the item we want to remove is in the cart already or not
        const foundShoppingCartItemIndex = itemIndexFromCart(
          product.id,
          modifiedShoppingCart
        );

        // Unlikely, but catch if this item is not in our cart and, if
        // not, return state
        if (!foundShoppingCartItemIndex)
          return { shoppingCart: modifiedShoppingCart };

        const currentShoppingCartItem =
          modifiedShoppingCart[foundShoppingCartItemIndex];

        // If the numberOfItems > 1, reduce it by 1.
        if (currentShoppingCartItem.numberOfItems > 1) {
          currentShoppingCartItem.numberOfItems--;
        } else {
          // If the amount is 1, remove that item
          modifiedShoppingCart.splice(foundShoppingCartItemIndex, 1);
        }
      }),
  }))
);

// import { create } from 'zustand'

// interface BearState {
//   bears: number
//   increase: (by: number) => void
// }

// const useBearStore = create<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
// }))
