import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Product } from '../_types/product';

export interface ShoppingCartState {
  shoppingCart: Product[];
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
        const modifiedShoppingCart = [...state.shoppingCart];
        modifiedShoppingCart.push(product);
        return {
          shoppingCart: modifiedShoppingCart,
        };
      }),
    removeItemFromCart: (product) =>
      set((state) => {
        const modifiedShoppingCart = [...state.shoppingCart];
        const position = modifiedShoppingCart.indexOf(product);
        modifiedShoppingCart.splice(position, 1);
        return {
          shoppingCart: modifiedShoppingCart,
        };
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
