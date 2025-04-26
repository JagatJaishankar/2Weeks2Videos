"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginButton({ session, size }) {
  if (session) {
    if (size == "real-small") {
      return (
        <div className='btn btn-neutral font-lora font-bold'>
          <Link href={"/dashboard"}>Dashboard</Link>
        </div>
      );
    }
    return (
      <div className='btn btn-neutral font-raleway font-extrabold text-lg'>
        <Link href={"/dashboard"}>Welcome Back</Link>
      </div>
    );
  }

  if (size == "real-small") {
    return (
      <Link href={"/login"}>
        <button
          className='btn btn-neutral font-lora font-bold'
          // onClick={() => {
          //   signIn("email", { callbackUrl: "/dashboard" });
          // }}
        >
          Get Started
        </button>
      </Link>
    );
  }
  return (
    <Link href={"/login"}>
      <button
        className='btn btn-neutral font-raleway font-extrabold text-lg'
        // onClick={() => {
        //   signIn("email", { callbackUrl: "/dashboard" });
        // }}
      >
        Get Started
      </button>
    </Link>
  );
}
