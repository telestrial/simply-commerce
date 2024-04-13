import { create } from 'zustand';

interface ShoppingCartState {
  shoppingCart: string[];
}

const useShoppingCart = create((set) => ({
  shoppingCart: [],
}));
