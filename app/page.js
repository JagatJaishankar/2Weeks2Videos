import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import OverviewButton from "./components/OverviewButton";
import LoginButton from "./components/LoginButton";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {/* NavBar */}
      <section className='max-w-3xl mx-auto px-6 pt-3'>
        <div className='navbar bg-base-200 shadow-md rounded-2xl'>
          <div className='flex-1'>
            <Link
              href={"/"}
              className='btn btn-ghost text-4xl font-raleway font-black'>
              2W2V
            </Link>
          </div>
          <div className='flex-none font-lora opacity-80 md:block hidden'>
            <ul className='menu menu-horizontal px-1'>
              <li className='link link-hover'>
                <a href='#journey'>Journey</a>
              </li>
              <li className='link link-hover'>
                <a href='#resources'>Resources</a>
              </li>
              <li className='link link-hover'>
                <a href='#pricing'>Pricing</a>
              </li>
            </ul>
          </div>
          <div
            className={`dropdown dropdown-end ${
              session ? "hidden" : "max-md:block hidden"
            }`}>
            <div tabIndex={0} role='button' className='btn btn-ghost mr-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-7'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </div>
            <ul className='menu dropdown-content bg-base-100 rounded-box z-1 w-36 p-2 shadow-md font-lora opacity-80'>
              <li className='link link-hover'>
                <a href='#journey'>Journey</a>
              </li>
              <li className='link link-hover'>
                <a href='#resources'>Resources</a>
              </li>
              <li className='link link-hover'>
                <a href='#pricing'>Pricing</a>
              </li>
            </ul>
          </div>
          <LoginButton session={session} />
        </div>
      </section>
      {/* Hero Section */}
      <section className='max-w-3xl mx-auto px-6 py-32 text-center'>
        <div className='font-raleway font-black max-md:text-4xl text-5xl leading-tight mb-4'>
          Become a YouTuber <br className='max-md:hidden' />{" "}
          <span className='relative inline-block'>
            <span className='relative z-10'>in Days, </span>
            <span className='absolute inset-x-0 bottom-0 h-6 bg-primary opacity-70 left-[-1%] right-[-3%]'></span>
          </span>{" "}
          Not Weeks
        </div>
        <div className='font-lora text-lg opacity-80 mb-12'>
          Everything you need to build your channel or personal brand&mdash;
          <span className='font-extrabold italic'>includes motivation</span>
        </div>
        <OverviewButton label='Challenge Overview' />
      </section>
      {/* Journey */}
      <section className='bg-base-200 px-6 py-32' id='journey'>
        <div className='max-w-3xl mx-auto text-center'>
          <div className='uppercase tracking-widest font-bold opacity-60 text-sm mb-2'>
            journey
          </div>
          <div className='text-3xl font-raleway font-black leading-tight mb-4'>
            <span className='relative inline-block'>
              <span className='relative z-10'>60-80%</span>
              <span className='absolute inset-x-0 bottom-0 h-5 bg-primary opacity-70 left-[-1%] right-[-3%]'></span>
            </span>{" "}
            YouTubers Stop After <br className='max-md:hidden' />
            Uploading Their First Video
          </div>
          <div className='font-lora text-lg opacity-80 mb-6'>
            Don&apos;t let yourself be one of them
          </div>
          <div className='mb-12'>
            <div className='flex flex-row max-md:flex-col justify-between items-center gap-4'>
              <div className='w-full md:w-48 flex flex-col gap-2 items-center justify-center'>
                <span className='text-4xl'>🤩</span>
                <div className='font-lora font-bold opacity-80'>
                  Publish New Video
                </div>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.75}
                stroke='currentColor'
                className='size-6 max-md:hidden'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 md:hidden'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
                />
              </svg>
              <div className='w-full md:w-48 flex flex-col gap-2 items-center justify-center'>
                <span className='text-4xl'>😐</span>
                <div className='font-lora font-bold opacity-80'>
                  Get Little Views
                </div>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.75}
                stroke='currentColor'
                className='size-6 max-md:hidden'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 md:hidden'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
                />
              </svg>
              <div className='w-full md:w-48 flex flex-col gap-2 items-center justify-center'>
                <span className='text-4xl'>😔</span>
                <div className='font-lora font-bold opacity-80'>
                  Lose Motivation
                </div>
              </div>
            </div>
          </div>
          <OverviewButton label='Start Your Journey' />
        </div>
      </section>
      {/* YT Resource */}
      <section
        className='max-w-3xl mx-auto text-center px-6 py-32'
        id='resources'>
        <div className='uppercase tracking-widest font-bold opacity-60 text-sm mb-2'>
          resources
        </div>
        <div className='text-3xl font-raleway font-black leading-tight mb-4'>
          Not Just a Challenge, It&apos;s a{" "}
          <span className='relative inline-block'>
            <span className='relative z-10'>YouTube Shortcut</span>
            <span className='absolute inset-x-0 bottom-0 h-4 bg-primary opacity-70 left-[-1%] right-[-1%]'></span>
          </span>
        </div>
        <div className='font-lora text-lg opacity-80 mb-6'>
          A fully loaded resource guiding you from idea to upload&mdash;so you
          never feel stuck
        </div>
        <Image
          src='/2w2v-resource-clip.gif'
          width={500}
          height={333}
          alt='YouTube Resource For Channel Growth'
          className='rounded-2xl shadow-md mx-auto mb-12'
          quality={50}
          unoptimized
          priority={true}
        />
        <OverviewButton label='Take The Shortcut' />
      </section>
      {/* Pricing */}
      <section className='bg-base-200 px-6 py-32' id='pricing'>
        <div className='max-w-3xl mx-auto text-center'>
          <div className='uppercase tracking-widest font-bold opacity-60 text-sm mb-2'>
            pricing
          </div>
          <div className='text-3xl font-raleway font-black leading-tight mb-4'>
            Depends on{" "}
            <span className='relative inline-block'>
              <span className='relative z-10'>How Lazy</span>
              <span className='absolute inset-x-0 bottom-0 h-4 bg-primary opacity-70 left-[-1%] right-[-1%]'></span>
            </span>{" "}
            You Are...
          </div>
          <div className='font-lora text-lg opacity-80 mb-12'>
            Could be 100% FREE or could burn a hole in your pocket
            ($14)&mdash;it depends on you
          </div>
          <OverviewButton label='Pay With Effort' />
        </div>
      </section>
      {/* Footer */}
      <section className='max-w-3xl mx-auto px-6 py-6'>
        <div className='font-lora opacity-80 flex md:flow-row max-md:flex-col md:justify-between max-md:space-y-4 text-center'>
          <div className='md:text-left'>
            <div className='font-raleway font-bold'>2 Weeks, 2 Videos</div>
            <div>Become a YouTuber in Days, Not Weeks</div>
            <div>
              Made with 🍯 and 🐰 by{" "}
              <span className='link link-active'>Jagat</span>
            </div>
            <div className='opacity-50'>
              Copyright &copy; {new Date().getFullYear()}
            </div>
          </div>
          <div className='md:text-right'>
            <div className='uppercase tracking-widest font-bold opacity-80 text-sm font-raleway'>
              legal
            </div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Refund Policy</div>
          </div>
        </div>
      </section>
    </main>
  );
}
