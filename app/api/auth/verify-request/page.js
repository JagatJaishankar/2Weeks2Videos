import Link from "next/link";

export default function VerifyRequest() {
  return (
    <main className='max-w-3xl mx-auto py-2 px-6'>
      <div className='pl-2 pt-6 mb-10'>
        <Link href={"/login"} className='btn btn-ghost items-center'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5 8.25 12l7.5-7.5'
              />
            </svg>
          </div>
          <div className='font-raleway font-extrabold text-lg'>Back</div>
        </Link>
      </div>
      <div className='py-40'>
        <div className='max-w-80 mx-auto bg-base-200 rounded-2xl flex flex-col text-center py-6 px-2 space-y-4'>
          <div className='font-raleway font-extrabold text-2xl'>
            Check Your Email
          </div>
          <div className='font-lora opacity-80'>
            A sign in link has been sent to <br />
            your email address.
          </div>
          <div className='font-lora opacity-50'>2weeks2videos.com</div>
        </div>
      </div>
    </main>
  );
}
