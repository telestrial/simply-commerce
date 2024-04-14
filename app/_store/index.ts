import { create } from 'zustand';

interface ShoppingCartState {
  shoppingCart: string[];
}

export const useShoppingCart = create((set) => ({
  shoppingCart: [],
  resetShoppingCart: () =>
    set(() => ({
      shoppingCart: [],
    })),
  addItemToCart: (itemID: string) =>
    set((state: ShoppingCartState) => ({
      shoppingCart: state.shoppingCart.push(itemID),
    })),
  removeItemFromCart: (itemID: string) =>
    set((state: ShoppingCartState) => {
      const modifiedShoppingCart = state.shoppingCart;
      const position = modifiedShoppingCart.indexOf(itemID);
      modifiedShoppingCart.splice(position, 1);
      return {
        shoppingCart: modifiedShoppingCart,
      };
    }),
}));
