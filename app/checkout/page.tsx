'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useShoppingCart } from '../_store';
import CheckoutTable from '../_components/CheckoutTable';

export default function Checkout() {
  const { push } = useRouter();
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCart);

  useEffect(() => {
    if (!shoppingCartItems.length) push('/');
  }, [push, shoppingCartItems]);

  return (
    <div className='flex justify-center pt-10'>
      <div className='w-6/12'>
        <Link href='/' className='underline text-cyan-700'>
          Home
        </Link>
        <div className='pt-10'>
          <CheckoutTable shoppingCartItems={shoppingCartItems} />
        </div>
      </div>
    </div>
  );
}
