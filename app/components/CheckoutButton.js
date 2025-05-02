"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await axios.post("/api/billing/create-checkout", {
        successUrl: window.location.href + "/success",
        cancelUrl: window.location.href,
      });
      const checkoutUrl = response.data.url;
      window.location.href = checkoutUrl;
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
