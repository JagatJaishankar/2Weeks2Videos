import Link from "next/link";
import { auth } from "@/auth";

import AcceptButton from "../components/AcceptButton";
import LoginButton from "../components/LoginButton";
import FooterSection from "../components/FooterSection";

export default async function Overview() {
  const session = await auth();

  const checkMark = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2.5}
      stroke='currentColor'
      className='size-5 max-sm:hidden'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m4.5 12.75 6 6 9-13.5'
      />
    </svg>
  );

  const toolkit = [
    { title: "14-Day YouTuber Challenge", price: "$99" },
    { title: "Filming Like a Pro (Phone Edition)", price: "$147" },
    { title: "High-Retention Scripting", price: "$129" },
    { title: "Thumbnail Mastery (3C Framework)", price: "$97" },
    { title: "SEO Optimisation Toolkit", price: "$127" },
  ];

  const timelineItems = [
    {
      day: "Day 01",
      title: "Finding the Perfect Video Idea",
      text: `Use the viral video formula to spark ideas, validate them instantly, 
           and build a bank of high potential concepts—so you never run out of content.`,
      side: "start",
    },
    {
      day: "Day 02",
      title: "Creating a Click-Worthy Thumbnail",
      text: `Master the 3C framework to create thumbnails that demand clicks. 
           Test variations, analyse performance, and swap them post launch to maximise views.`,
      side: "end",
    },
    {
      day: "Day 03",
      title: "Writing a High-Retention Script",
      text: `Hook viewers in the first second and keep them watching. 
           Structure your content for maximum retention and lead them straight to your next video.`,
      side: "start",
    },
    {
      day: "Day 04",
      title: "Filming Like a Pro",
      subtitle: "(With Just Your Phone)",
      text: `No fancy setup? No problem. Nail the perfect lighting, camera settings, and framing—your 
           videos will look pro-level, no matter the device.`,
      side: "end",
    },
    {
      day: "Day 05",
      title: "Editing for Maximum Retention",
      text: `Keep every second engaging. Learn simple but powerful editing techniques to boost watch time 
           without overcomplicating the process.`,
      side: "start",
    },
    {
      day: "Day 06",
      title: "SEO & Video Optimization",
      text: `Go beyond just uploading. Craft titles, descriptions, and tags that drive traffic—so your videos 
           get discovered long after publishing.`,
      side: "end",
    },
    {
      day: "Day 07",
      title: "Expanding Beyond YouTube",
      text: `One video, endless reach. Repurpose content across Instagram, Twitter, and TikTok to grow without 
           creating from scratch.`,
      side: "start",
    },
    {
      day: "Day 08 to 14",
      title: "The Cycle Repeats",
      text: `Success isn't one-and-done. Keep refining, experimenting, and improving. Each video gets better, 
           every upload builds momentum, and soon, growth becomes inevitable.`,
      side: "end",
    },
  ];

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
                <a href='#blueprint'>Blueprint</a>
              </li>
              <li className='link link-hover'>
                <a href='#toolkit'>Toolkit</a>
              </li>
              <li className='link link-hover'>
                <a href='#decision'>Decision</a>
              </li>
            </ul>
          </div>
          <div className='dropdown dropdown-end max-md:block hidden'>
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
                <a href='#blueprint'>Blueprint</a>
              </li>
              <li className='link link-hover'>
                <a href='#toolkit'>Toolkit</a>
              </li>
              <li className='link link-hover'>
                <a href='#decision'>Decision</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Title */}
      <section className='max-w-3xl mx-auto px-6 py-32 text-center'>
        <div className='font-raleway font-black max-md:text-4xl text-5xl leading-tight mb-4'>
          <br className='max-md:hidden' />
          <span className='relative inline-block'>
            <span className='relative z-10'>Bet $14</span>
            <span className='absolute inset-x-0 bottom-0 h-6 bg-primary opacity-70 left-[-1%] right-[-3%]'></span>
          </span>{" "}
          on Yourself Now
        </div>
        <div className='font-lora text-lg opacity-80 mb-12'>
          Get 100% of it back when you finish&mdash;
          <span className='font-extrabold italic'>
            invest in your future self today
          </span>
        </div>
      </section>

      {/* Blueprint */}
      <section className='bg-base-200 px-6 py-32' id='blueprint'>
        <div className='max-w-3xl mx-auto'>
          <div className='uppercase tracking-widest font-bold opacity-60 text-sm mb-2 text-center'>
            blueprint
          </div>
          <div className='text-3xl font-raleway font-black leading-tight mb-4 text-center'>
            The Path{" "}
            <span className='relative inline-block'>
              <span className='relative z-10'>Ahead</span>
              <span className='absolute inset-x-0 bottom-0 h-5 bg-primary opacity-70 left-[-1%] right-[-3%]'></span>
            </span>{" "}
            of You
          </div>
          <div className='font-lora text-lg opacity-80 mb-6 text-center'>
            Everything is planned out—you&apos;ll know exactly what to do and
            how to do it
          </div>
          <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
            {timelineItems.map((item, index) => (
              <li key={index}>
                {/* Only insert <hr /> before and after items except the first and last */}
                {index !== 0 && <hr />}
                <div className='timeline-middle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5'>
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div
                  className={`timeline-${item.side} mb-10 ${
                    item.side === "start" ? "md:text-end" : "md:text-start"
                  }`}>
                  <time className='font-mono italic opacity-70'>
                    {item.day}
                  </time>
                  <div className='text-xl font-raleway font-black'>
                    {item.title}
                    {item.subtitle && (
                      <div className='opacity-50 text-lg'>{item.subtitle}</div>
                    )}
                  </div>
                  <span className='font-lora'>{item.text}</span>
                </div>
                {index !== timelineItems.length - 1 && <hr />}
              </li>
            ))}
          </ul>
          <div className='text-center'>
            <AcceptButton label='Level Up Now' />
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section
        className='max-w-3xl mx-auto text-center px-6 py-32'
        id='toolkit'>
        <div className='uppercase tracking-widest font-bold opacity-60 text-sm mb-2'>
          toolkit
        </div>
        <div className='text-3xl font-raleway font-black leading-tight mb-4'>
          Everything You&apos;ll Get for{" "}
          <span className='relative inline-block'>
            <span className='relative z-10'>FREE</span>
            <span className='absolute inset-x-0 bottom-0 h-4 bg-primary opacity-70 left-[-1%] right-[-1%]'></span>
          </span>
        </div>
        <div className='font-lora sm:text-lg opacity-80 mb-6'>
          Accept the &apos;2W2V&apos; Challenge Today&mdash;
          <span className='font-bold'>Pay Just $14, Get It ALL Back</span>
        </div>
        <div className='flex flex-col space-y-1 font-lora justify-center mb-6'>
          {toolkit.map((tool, index) => (
            <div
              key={index}
              className='flex flex-row space-x-1 justify-center items-center'>
              <div>{checkMark}</div>
              <div>
                {tool.title} &mdash;{" "}
                <span className='font-raleway font-extrabold sm:text-lg'>
                  {tool.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='font-raleway font-black text-4xl text-secondary'>
          Total Value: $499
        </div>
        <div className='font-lora opacity-60 mb-10'>
          (All for <span className='font-bold'>just $14</span>&mdash;an
          investment you can make back)
        </div>
        <AcceptButton label='Get Everything Now' />
      </section>

      {/* Decision */}
      <section className='bg-base-200 px-6 py-32' id='decision'>
        <div className='max-w-3xl mx-auto'>
          <div className='uppercase tracking-widest font-bold opacity-60 text-sm mb-2 text-center'>
            decision
          </div>
          <div className='text-3xl font-raleway font-black leading-tight mb-4 text-center'>
            Do You{" "}
            <span className='relative inline-block'>
              <span className='relative z-10'>Accept?</span>
              <span className='absolute inset-x-0 bottom-0 h-5 bg-primary opacity-70 left-[-1%] right-[-3%]'></span>
            </span>
          </div>
          <div className='font-lora text-lg opacity-80 text-center'>
            This Is Your Shot&mdash;Will You Take It?
          </div>
          <div className='bg-base-100 p-6 rounded-2xl shadow-xl border border-base-300 max-w-2xl mx-auto mt-8 mb-10'>
            <h3 className='text-xl font-extrabold text-secondary mb-2 flex flex-row items-center space-x-2'>
              <input type='checkbox' className='checkbox checkbox-neutral' />{" "}
              <div className='font-raleway'>
                Yes! Upgrade the Order for Just $37
              </div>
            </h3>
            <div className='sm:text-lg font-lora font-semibold mb-2'>
              🧠 The Smart YouTuber Pack
            </div>
            <p className='mb-4 text-base text-base-content font-lora'>
              Struggling with video ideas, scripting, or editing? This pack
              gives you the exact tools top YouTubers use to create faster, hook
              viewers, and grow their channel—without the guesswork.
            </p>
            <p className='mb-4 text-base text-base-content font-lora'>
              You&apos;ll get proven templates for titles, scripts, and
              descriptions, AI-powered writing assistants, a library of editing
              assets (overlays, transitions, SFX), and high-converting thumbnail
              swipe files.
            </p>
            <p className='mt-4 text-base font-medium font-lora'>
              ✅ Check &quot;Yes&quot; above to add it to your order for just
              $37!
            </p>
            <blockquote className='mt-2 border-l-2 pl-2 text-sm text-red-500 font-lora block max-sm:hidden'>
              Majority of our top challengers grab this upgrade&mdash;it&apos;s
              a game changer.
            </blockquote>
          </div>
          <div className='text-center'>
            <LoginButton session={session} />
          </div>
          <div className='font-lora opacity-50 mt-3 text-center'>
            Start Your YouTuber Journey Now!
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
