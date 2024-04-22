'use client';

import { useShoppingCart } from '../_store';

export default function ShoppingCartMenu() {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);
  return (
    <div
      tabIndex={0}
      className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
    >
      <div className='card-body'>
        <span className='font-bold text-lg'>
          {shoppingCart.length === 1
            ? `1 Item`
            : `${shoppingCart.length} Items`}
        </span>
        {shoppingCart.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
        <span className='text-info'>Subtotal: $999</span>
        <div className='card-actions'>
          <button className='btn btn-primary btn-block'>View cart</button>
        </div>
      </div>
    </div>
  );
}
