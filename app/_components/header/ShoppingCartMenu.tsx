'use client';

import Link from 'next/link';

import { useTotalNumberOfItems, useShoppingCartTotal } from '../../_store';

import ShoppingCartIndicator from './ShoppingCartIndicator';

export default function ShoppingCartMenu() {
  const totalNumberOfItems = useTotalNumberOfItems();
  const shoppingCartTotal = useShoppingCartTotal();

  return (
    <>
      <ShoppingCartIndicator />
      <div
        tabIndex={0}
        className='mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow'
      >
        <div className='card-body'>
          <span className='font-bold text-lg'>
            {totalNumberOfItems === 1
              ? `1 Item`
              : `${totalNumberOfItems} Items`}
          </span>
          <span className='text-info'>Subtotal: ${shoppingCartTotal}</span>
          <div className='card-actions'>
            {totalNumberOfItems > 0 ? (
              <Link href='/checkout' className='btn btn-primary btn-block'>
                View cart
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
