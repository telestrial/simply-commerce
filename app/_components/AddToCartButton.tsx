'use client';

import { useShoppingCart } from '../_store';

import { Product } from '../_types/product';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton(props: AddToCartButtonProps) {
  const { product } = props;

  const addToCart = useShoppingCart((state) => state.addItemToCart);

  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        addToCart(product);
      }}
    >
      Add to Cart
    </button>
  );
}
