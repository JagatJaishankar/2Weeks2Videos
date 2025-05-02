"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginButton({ session, size, isSmart }) {
  const callbackUrl = isSmart ? "/redirecting" : "/redirect";

  if (session) {
    if (size === "real-small") {
      return (
        <div className='btn btn-neutral font-lora font-bold'>
          <Link href={callbackUrl}>Dashboard</Link>
        </div>
      );
    }
    return (
      <div className='btn btn-neutral font-raleway font-extrabold text-lg'>
        <Link href={callbackUrl}>Welcome Back</Link>
      </div>
    );
  }

  if (size === "real-small") {
    return (
      <button
        className='btn btn-neutral font-lora font-bold'
        onClick={() => {
          signIn("email", { callbackUrl });
        }}>
        Get Started
      </button>
    );
  }

  return (
    <button
      className='btn btn-neutral font-raleway font-extrabold text-lg'
      onClick={() => {
        signIn("email", { callbackUrl });
      }}>
      Get Started
    </button>
  );
}
