import Image from 'next/image';

import ShoppingCartIndicator from './ShoppingCartIndicator';

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
          <ShoppingCartIndicator />
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
          >
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <Image
                alt='Tailwind CSS Navbar component'
                src=''
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
