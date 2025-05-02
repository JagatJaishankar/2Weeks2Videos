"use client";

import { useState } from "react";

import LoginButton from "./LoginButton";

export default function DecisionSection({ session }) {
  const [isSmart, setIsSmart] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsSmart(e.target.checked);
  };

  return (
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
            <input
              type='checkbox'
              className='checkbox checkbox-neutral'
              checked={isSmart}
              onChange={handleCheckboxChange}
            />
            <div className='font-raleway'>
              Yes! Upgrade the Order for Just $37
            </div>
          </h3>
          <div className='sm:text-lg font-lora font-semibold mb-2'>
            🧠 The Smart YouTuber Pack
          </div>
          <p className='mb-4 text-base text-base-content font-lora'>
            Struggling with video ideas, scripting, or editing? This pack gives
            you the exact tools top YouTubers use to create faster, hook
            viewers, and grow their channel—without the guesswork.
          </p>
          <p className='mb-4 text-base text-base-content font-lora'>
            You&apos;ll get proven templates for titles, scripts, and
            descriptions, AI-powered writing assistants, a library of editing
            assets (overlays, transitions, SFX), and high-converting thumbnail
            swipe files.
          </p>
          <p className='mt-4 text-base font-medium font-lora'>
            ✅ Check &quot;Yes&quot; above to add it to your order for just $37!
          </p>
          <blockquote className='mt-2 border-l-2 pl-2 text-sm text-red-500 font-lora block max-sm:hidden'>
            Majority of our top challengers grab this upgrade&mdash;it&apos;s a
            game changer.
          </blockquote>
        </div>
        <div className='text-center'>
          <LoginButton session={session} isSmart={isSmart} />
        </div>
        <div className='font-lora opacity-50 mt-3 text-center'>
          Start Your YouTuber Journey Now!
        </div>
      </div>
    </section>
  );
}
