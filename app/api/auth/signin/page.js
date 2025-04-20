import Link from "next/link.js";
import { signIn } from "@/auth.js";

export default function SignIn() {
  return (
    <main className='max-w-3xl mx-auto py-2 px-6'>
      <div className='pl-2 pt-6'>
        <Link href={"/"} className='btn btn-ghost items-center'>
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
      <div className='mt-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-40'>
          <div className='flex flex-col space-y-8 text-center'>
            <h1 className='font-raleway font-black text-2xl'>Welcome back</h1>
            <p className='font-lora opacity-80'>
              Enter your email to sign in / create your account. No password is
              reqiuired.
            </p>
            <form
              action={async (formData) => {
                "use server";
                await signIn("resend", formData);
              }}>
              <label className='input validator w-full font-lora'>
                <svg
                  className='h-[1em] opacity-50'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'>
                  <g
                    strokeLinejoin='round'
                    strokeLinecap='round'
                    strokeWidth='2.5'
                    fill='none'
                    stroke='currentColor'>
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </g>
                </svg>
                <input
                  type='email'
                  name='email'
                  placeholder='name@example.com'
                  required
                />
              </label>
              <div className='validator-hint hidden font-lora'>
                Enter valid email address
              </div>
              <button
                type='submit'
                className='btn btn-primary w-full mt-4 font-raleway font-extrabold'>
                Sign in with Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
