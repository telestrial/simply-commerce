import Image from 'next/image';

export default function UserIndicator() {
  return (
    <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
      <div className='w-10 rounded-full'>
        <Image
          alt='Tailwind CSS Navbar component'
          src='/user.JPG'
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
