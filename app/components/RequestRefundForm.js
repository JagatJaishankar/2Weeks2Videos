"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const RequestRefundForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [like, setLike] = useState("");
  const [struggle, setStruggle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const data = await axios.post("/api/refund", {
        url,
        source,
        like,
        struggle,
      });

      setUrl("");
      setSource("");
      setLike("");
      setStruggle("");

      toast.success("Refund will be processed within 24 hrs");

      router.refresh();
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='bg-base-200 p-8 rounded-2xl' onSubmit={handleSubmit}>
      <p className='font-raleway font-extrabold text-2xl'>
        Get Your $14 Back NOW!
      </p>
      <legend className='fieldset-legend font-lora text-sm opacity-60 mt-1'>
        YouTube Channel Link
      </legend>
      <label className='input validator w-full'>
        <svg
          className='h-[1em] opacity-50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'>
          <g
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='2.5'
            fill='none'
            stroke='currentColor'>
            <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
            <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
          </g>
        </svg>
        <input
          type='url'
          placeholder='https://'
          pattern='^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$'
          title='Must be valid URL'
          className='font-lora'
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </label>
      <fieldset className='fieldset w-full mt-2'>
        <legend className='fieldset-legend font-lora text-sm opacity-60'>
          Where did you come across 2W2V?
        </legend>
        <input
          type='text'
          className='input font-lora w-full'
          placeholder=''
          value={source}
          onChange={(event) => setSource(event.target.value)}
        />
      </fieldset>
      <fieldset className='fieldset mt-2 w-full'>
        <legend className='fieldset-legend font-lora text-sm opacity-60'>
          What did you like about the challenge?
        </legend>
        <textarea
          className='textarea h-24 w-full font-lora'
          value={like}
          onChange={(event) => setLike(event.target.value)}></textarea>
      </fieldset>
      <fieldset className='fieldset mt-2 w-full'>
        <legend className='fieldset-legend font-lora text-sm opacity-60'>
          Did you face any difficulty? Where?
        </legend>
        <textarea
          className='textarea h-24 w-full font-lora'
          value={struggle}
          onChange={(event) => setStruggle(event.target.value)}></textarea>
      </fieldset>
      <button
        className='btn btn-primary font-extrabold text-lg font-raleway mt-4 w-full'
        type='submit'>
        {loading && (
          <span className='loading loading-spinner loading-md'></span>
        )}
        Request Refund
      </button>
    </form>
  );
};
export default RequestRefundForm;
