'use client';

import Link from 'next/link';

import { useShoppingCart } from '../_store';

export default function Checkout() {
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCart);

  return (
    <div className='flex w-100 justify-center pt-10'>
      <Link href='/'>Home</Link>
      Hello, Checkout!
    </div>
  );
}
