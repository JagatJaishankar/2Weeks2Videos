"use client";
import { useEffect, useState } from "react";

const DEADLINE_MS = 14 * 24 * 60 * 60 * 1000;

export default function CountdownTimer({ startTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!startTime) return;

    const storedDate = new Date(startTime);
    const targetDate = new Date(storedDate.getTime() + DEADLINE_MS);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className='grid grid-flow-col gap-5 text-center auto-cols-max mt-4 font-lora'>
      <div className='flex flex-col'>
        <span className='countdown font-lora font-bold text-5xl'>
          <span style={{ "--value": timeLeft.days }}></span>
        </span>
        days
      </div>
      <div className='flex flex-col'>
        <span className='countdown font-lora font-bold text-5xl'>
          <span style={{ "--value": timeLeft.hours }}></span>
        </span>
        hours
      </div>
      <div className='flex flex-col'>
        <span className='countdown font-lora font-bold text-5xl'>
          <span style={{ "--value": timeLeft.minutes }}></span>
        </span>
        min
      </div>
      <div className='flex flex-col'>
        <span className='countdown font-lora font-bold text-5xl'>
          <span style={{ "--value": timeLeft.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
