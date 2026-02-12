"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ClientRedirect() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handlePayment() {
    setLoading(true);
    try {
      await axios.post("/api/billing/grant-access");
      toast.success("Payment successful!");
      router.push("/success");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Something went wrong";
      toast.error(errorMessage);
      setLoading(false);
    }
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center font-lora'>
      <div className='text-center max-w-md px-6'>
        <h1 className='text-3xl font-raleway font-black mb-4'>
          Complete Your Purchase
        </h1>
        <p className='text-lg opacity-80 mb-8'>
          Get full access to 2Weeks2Videos and start your YouTube journey today.
        </p>
        <button
          onClick={handlePayment}
          disabled={loading}
          className='btn btn-primary btn-lg font-raleway font-extrabold text-lg w-full'>
          {loading ? (
            <>
              <span className='loading loading-spinner loading-md'></span>
              Processing...
            </>
          ) : (
            "Pay Now"
          )}
        </button>
      </div>
    </div>
  );
}
