'use client';

import Link from 'next/link';

import { useShoppingCart } from '../_store';

export default function Checkout() {
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCart);

  return (
    <div className='flex flex-col w-100 justify-center align-middle pt-10'>
      <div className='w-52'>
        <Link href='/' className='underline text-cyan-700'>
          Home
        </Link>
      </div>
    </div>
  );
}