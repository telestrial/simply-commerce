import Image from 'next/image';

import ShoppingCartIndicator from './ShoppingCartIndicator';
import ShoppingCartMenu from './ShoppingCartMenu';
import UserIndicator from './UserIndicator';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='drawer'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            {/* Page content here */}
            <label htmlFor='my-drawer' className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='navbar-center'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>Simply Commerce</a>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <ShoppingCartMenu />
        </div>
        <div className='dropdown dropdown-end'>
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
