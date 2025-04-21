"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginButton({ session }) {
  if (session) {
    return (
      <div className='btn btn-neutral font-raleway font-extrabold text-lg'>
        <Link href={"/dashboard"}>Welcome Back</Link>
      </div>
    );
  }

  return (
    <button
      className='btn btn-neutral font-raleway font-extrabold text-lg'
      onClick={() => {
        signIn("email", { callbackUrl: "@/app/dashboard" });
      }}>
      Get Started
    </button>
  );
}
