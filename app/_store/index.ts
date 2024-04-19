import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface ShoppingCartState {
  shoppingCart: string[];
  resetShoppingCart: () => void;
  addItemToCart: (itemID: string) => void;
  removeItemFromCart: (itemID: string) => void;
}

export const useShoppingCart = create<ShoppingCartState>()(
  immer((set) => ({
    shoppingCart: [],
    resetShoppingCart: () =>
      set(() => ({
        shoppingCart: [],
      })),
    addItemToCart: (itemID) =>
      set((state) => {
        const modifiedShoppingCart = [...state.shoppingCart];
        modifiedShoppingCart.push(itemID);
        return {
          shoppingCart: modifiedShoppingCart,
        };
      }),
    removeItemFromCart: (itemID) =>
      set((state) => {
        const modifiedShoppingCart = [...state.shoppingCart];
        const position = modifiedShoppingCart.indexOf(itemID);
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
