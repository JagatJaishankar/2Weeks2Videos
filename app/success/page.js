import Link from "next/link";

export default function Success() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen px-6 text-center'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='text-white'
          className='size-10 stroke-secondary mb-4'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </div>
      <div className='text-3xl font-raleway font-black'>
        Payment Successful!
      </div>
      <div className='text-lg font-lora opacity-80 mt-2'>
        Wishing you luck on your YouTuber journey...
      </div>
      <div className='mt-6'>
        <Link href={"/dashboard"}>
          <div className='btn btn-primary font-raleway font-extrabold text-lg'>
            Get Started!
          </div>
        </Link>
      </div>
    </main>
  );
}
