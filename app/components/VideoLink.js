"use client";

import toast from "react-hot-toast";

const VideoLink = ({ url }) => {
  const videoLink = url;

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Video link copied");
  };
  return (
    <div className='bg-base-200 rounded-2xl text-sm px-4 py-2.5 font-lora flex items-center mb-3 justify-between max-w-80 mx-auto mt-3'>
      <div className='truncate flex-1'>{url}</div>
      <button className='btn btn-sm btn-neutral rounded-xl' onClick={copyLink}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
          />
        </svg>
      </button>
    </div>
  );
};
export default VideoLink;
