'use client';

import Link from 'next/link';

import { useShoppingCart } from '../_store';

export default function Checkout() {
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCart);

  return (
    <div className='flex flex-col w-100 justify-center align-middle pt-10'>
      <div className='w-10'>
        <Link href='/' className='underline text-cyan-700'>
          Home
        </Link>
        {shoppingCartItems.map((item) => (
          <div key={item.id}>
            {item.name}: {item.numberOfItems}
          </div>
        ))}
      </div>
    </div>
  );
}
