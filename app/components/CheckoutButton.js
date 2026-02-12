"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubscribe = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await axios.post("/api/billing/grant-access");
      toast.success("Payment successful!");
      router.push("/success");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      className='btn btn-primary font-raleway font-extrabold text-lg'
      onClick={() => handleSubscribe()}>
      {isLoading && (
        <span className='loading loading-spinner loading-md'></span>
      )}
      Start The Challenge
    </button>
  );
};
export default CheckoutButton;
