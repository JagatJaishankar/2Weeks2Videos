"use client";

import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ClientRedirect() {
  useEffect(() => {
    async function createCheckoutSession() {
      try {
        const response = await axios.post("/api/billing/create-checkout", {
          successUrl: `${window.location.origin}/success`,
          cancelUrl: window.location.href,
        });
        const checkoutUrl = response.data.url;
        window.location.href = checkoutUrl;
      } catch (error) {
        const errorMessage =
          error.response?.data?.error ||
          error.message ||
          "Something went wrong";
        toast.error(errorMessage);
      }
    }

    createCheckoutSession();
  }, []);

  return (
    <div className='h-screen flex items-center justify-center font-lora font-bold text-lg'>
      <span className='loading loading-spinner loading-md'></span>{" "}
      Redirecting...
    </div>
  );
}
