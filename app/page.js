import Image from "next/image";
import Link from "next/link";

import AcceptButton from "./components/AcceptButton";

export default function Home() {
  return (
    <main className="text-secondary">
      {/* NavBar */}
      <section className="max-w-3xl mx-auto px-6 py-2">
        <div className="navbar bg-base-300 rounded-2xl shadow-md">
          <div className="flex-1">
            <a className="text-3xl font-sohne-heavy ml-2">2W2V</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-3 font-sohne-regular">
              <li className="max-md:hidden">
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Hero-Section */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center" id="hero">
        <div className="text-5xl max-md:text-4xl font-sohne-heavy leading-tight">
          Become a YouTuber <br className="max-md:hidden inline" />{" "}
          <span className="relative inline-block">
            <span className="relative z-10">in Days, </span>
            <span className="absolute inset-x-0 bottom-0 h-6 bg-primary opacity-50 left-[-1%] right-[-3%]"></span>
          </span>{" "}
          Not Weeks
        </div>
        <div className="font-mt-regular text-lg mt-4 mb-10 opacity-70">
          Everything you need to build your channel or personal brand&mdash;
          <span className="font-mt-bold">includes motivation</span>
        </div>
        <AcceptButton />
      </section>
      {/* Growth */}
      <section className="bg-base-200 py-32" id="growth">
        <div className="max-w-3xl mx-auto text-center px-8">
          <div className="uppercase tracking-widest text-sm font-sohne-medium text-center opacity-70">
            GROWTH
          </div>
          <h1 className="text-3xl font-sohne-heavy mb-4 leading-snug pt-2">
            <span className="relative inline-block">
              <span className="relative z-10">60-80%</span>
              <span className="absolute inset-x-0 bottom-0 h-4 bg-primary opacity-50 left-[-1%] right-[-1%]"></span>
            </span>{" "}
            of YouTubers Stop After <br className="max-md:hidden inline" />
            Uploading Their First Video
          </h1>
          <div className="opacity-70 mb-12 font-mt-regular text-lg">
            Don&apos;t let yourself be one of them
          </div>
          <div className="mb-12">
            <div className="flex flex-row max-md:flex-col justify-between items-center gap-4">
              <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
                <span className="text-4xl">🤩</span>
                <h3 className="font-mt-bold">Publish New Video</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className="size-6 max-md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
              <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
                <span className="text-4xl">😐</span>
                <h3 className="font-mt-bold">Get Little Views</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className="size-6 max-md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
              <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
                <span className="text-4xl">😔</span>
                <h3 className="font-mt-bold">Lose Motivation</h3>
              </div>
            </div>
          </div>
          <AcceptButton />
        </div>
      </section>
      {/* Overview */}
      <section className="max-w-3xl mx-auto" id="overview">
        <div className="py-32 px-8">
          <div className="uppercase tracking-widest text-sm font-sohne-medium text-center opacity-70">
            OVERVIEW
          </div>
          <h1 className="text-3xl font-sohne-heavy mb-4 pt-2 text-center">
            <span className="relative inline-block">
              <span className="relative z-10">Your</span>
              <span className="absolute inset-x-0 bottom-0 h-4 bg-primary opacity-50 left-[-3%] right-[-3%]"></span>
            </span>{" "}
            Path Forward
          </h1>
          <div className="mb-10">
            <ul className="timeline timeline-snap-icon timeline-vertical font-avBook max-sm:timeline-compact">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start sm:text-end mb-3 font-mt-regular">
                  <time className="font-mt-bold italic opacity-70">001</time>
                  <div className="text-lg font-sohne-bold">
                    Put Your Money Down
                  </div>
                  Are you willing to bet $14&mdash;dollar a day&mdash;on
                  yourself to start the challenge? It&apos;s all in your hands.
                  How much do you trust yourself?
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-3 font-mt-regular">
                  <time className="font-mt-bold italic opacity-70">002</time>
                  <div className="text-lg font-sohne-bold">
                    14 Days, 2 Videos
                  </div>
                  You&apos;ve got 14 days to upload 2 videos to your YouTube
                  channel. It&apos;s go time—plan, film, edit, and show the
                  world what you&apos;ve got!
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start sm:text-end mb-3 font-mt-regular">
                  <time className="font-mt-bold italic opacity-70">003</time>
                  <div className="text-lg font-sohne-bold">
                    Get Your Money Back
                  </div>
                  Upload both videos, and you keep your money (plus bragging
                  rights)! Miss the deadline? You loose the money. Either way,
                  you&apos;re on your way to being a YouTuber.
                </div>
                <hr />
              </li>
            </ul>
          </div>
          <div className="text-center">
            <AcceptButton />
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="bg-base-200" id="pricing">
        <div className="max-w-3xl mx-auto py-32 text-center px-8">
          <div className="uppercase tracking-widest text-sm font-sohne-medium text-center opacity-70">
            PRICING
          </div>
          <h1 className="text-3xl font-sohne-heavy mb-4 pt-2 text-center">
            Depends on{" "}
            <span className="relative inline-block">
              <span className="relative z-10">How Lazy</span>
              <span className="absolute inset-x-0 bottom-0 h-4 bg-primary opacity-50 left-[-3%] right-[-3%]"></span>
            </span>{" "}
            You Are...
          </h1>
          <div className="font-mt-regular text-lg mt-4 mb-10 opacity-70">
            Could be 100% FREE or could burn a hole in your pocket
            ($14)&mdash;it depends on you
          </div>
          <AcceptButton />
        </div>
      </section>
      {/* Resources */}
      <section className="max-w-3xl mx-auto px-6 py-32" id="resources">
        <div className="uppercase tracking-widest text-sm font-sohne-medium text-center opacity-70">
          RESOURCES
        </div>
        <h1 className="text-3xl font-sohne-heavy mb-4 leading-snug pt-2 text-center">
          Not Just a Challenge, It&apos;s a{" "}
          <span className="relative inline-block">
            <span className="relative z-10">YouTube Shortcut</span>
            <span className="absolute inset-x-0 bottom-0 h-4 bg-primary opacity-50 left-[-1%] right-[-1%]"></span>
          </span>
        </h1>
        <div className="font-mt-regular text-lg mt-4 mb-10 opacity-70 text-center">
          A fully loaded resource guiding you from idea to upload—so you never
          feel stuck.
        </div>
        <Image
          src="/2w2v-resource-clip.gif"
          width={500}
          height={333}
          alt="Checklist preview"
          className="rounded-2xl shadow-lg mx-auto mb-10"
        />
        <div className="text-center">
          <AcceptButton />
        </div>
      </section>
      {/* Footer */}
      <section className=" bg-base-300">
        <div className="max-w-3xl mx-auto py-8 px-6 max-sm:text-center sm:flex sm:justify-between font-mt-regular">
          <div>
            <h1 className="font-sohne-bold mt-4">2 Weeks, 2 Videos</h1>
            <div className="font-avMedium">
              Become a YouTuber in Days, Not Weeks
            </div>
            <div className="font-avMedium">
              Made with 🍯 and 🐰 by{" "}
              <span className="link link-neutral">Jagat</span>
            </div>
            <div className="font-avBook opacity-75">
              Copyright &copy; {new Date().getFullYear()}
            </div>
          </div>
          <div className="mt-4 mb-2 sm:text-right">
            <div className="uppercase tracking-widest text-sm font-sohne-medium opacity-70">
              Legal
            </div>
            <div>
              <Link
                href="/privacy-policy"
                className="link link-hover font-avBook"
              >
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link
                href="/terms-of-service"
                className="link link-hover font-avBook"
              >
                Terms of Service
              </Link>
            </div>
            <div>
              <Link
                href="/refund-policy"
                className="link link-hover font-avBook"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// random change
