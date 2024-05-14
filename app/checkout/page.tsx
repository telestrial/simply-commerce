'use client';

import Link from 'next/link';

import { useShoppingCart } from '../_store';

export default function Checkout() {
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCart);

  return (
    <div className='flex justify-center pt-10'>
      <div className='w-6/12'>
        <Link href='/' className='underline text-cyan-700'>
          Home
        </Link>
        <div className='pt-10'>
          {shoppingCartItems.map((item) => (
            <div key={item.id}>
              {item.name}: {item.numberOfItems}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
