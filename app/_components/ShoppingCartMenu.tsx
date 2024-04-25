'use client';

import { useRef } from 'react';

import { useShoppingCart } from '../_store';

import CheckoutModal from './CheckoutModal';

export default function ShoppingCartMenu() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const { shoppingCart, removeItemFromCart } = useShoppingCart(
    (state) => state
  );

  const total = shoppingCart.reduce(
    (prev, curr) => prev + parseFloat(curr.price),
    0
  );

  return (
    <div
      tabIndex={0}
      className='mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow'
    >
      <div className='card-body'>
        <span className='font-bold text-lg'>
          {shoppingCart.length === 1
            ? `1 Item`
            : `${shoppingCart.length} Items`}
        </span>
        {shoppingCart.map((product, index) => (
          <div key={index} className='flex'>
            <span className='grow'>{product.name}</span>
            <input
              className='shrink w-11 border text-center'
              type='number'
              defaultValue={1}
              onChange={(event) => {
                console.log(event);
              }}
            />
          </div>
        ))}
        <span className='text-info'>Subtotal: ${total}</span>
        <div className='card-actions'>
          <button
            className='btn btn-primary btn-block'
            onClick={() => {
              if (modalRef.current) {
                modalRef.current.showModal();
              }
            }}
          >
            View cart
          </button>
        </div>
      </div>
      <CheckoutModal modalRef={modalRef} />
    </div>
  );
}
