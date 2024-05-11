import ShoppingCartMenu from './ShoppingCartMenu';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'></div>
      <div className='navbar-center'>
        <div className='flex-1'>
          <Link className='btn btn-ghost text-xl' href='/'>
            Simply Commerce
          </Link>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <ShoppingCartMenu />
        </div>
      </div>
    </div>
  );
}
