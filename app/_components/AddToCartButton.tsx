'use client';

import { useShoppingCart } from '../_store';

interface AddToCartButtonProps {
  productID: string;
}

export default function AddToCartButton(props: AddToCartButtonProps) {
  const { productID } = props;

  const addToCart = useShoppingCart((state) => state.addItemToCart);

  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        addToCart(productID);
      }}
    >
      Add to Cart
    </button>
  );
}
