import Link from 'next/link';

export default function Checkout() {
  return (
    <div className='flex w-100 justify-center pt-10'>
      <Link href='/'>Home</Link>
      Hello, Checkout!
    </div>
  );
}
