"use client";

import { useState } from "react";
import axios from "axios";

const NewVideoForm = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");
  const [difficulty, setDifficulty] = useState(20);
  const [manifest, setManifest] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      // const response = await fetch("/api/video", {
      //   method: "POST",
      //   body: JSON.stringify({ title, url, about, difficulty, manifest }),
      //   headers: { "Content-Type": "application/json" },
      // });
      // const data = await response.json();
      const data = await axios.post("/api/video", {
        title,
        url,
        about,
        difficulty,
        manifest,
      });
      console.log(data);

      setTitle("");
      setUrl("");
      setAbout("");
      setDifficulty(20);
      setManifest("");
    } catch (error) {
      // display the error
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='bg-base-200 p-8 rounded-2xl' onSubmit={handleSubmit}>
      <p className='font-raleway font-extrabold text-2xl'>
        Submit Your Published Video
      </p>
      <fieldset className='fieldset w-full mt-1'>
        <legend className='fieldset-legend font-lora text-sm opacity-60'>
          Title of the video
        </legend>
        <input
          type='text'
          className='input font-lora w-full'
          placeholder=''
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </fieldset>
      <legend className='fieldset-legend font-lora text-sm opacity-60 mt-1'>
        Link of the YouTube video
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
          required
        />
      </label>
      <fieldset className='fieldset mt-2 w-full'>
        <legend className='fieldset-legend font-lora text-sm opacity-60'>
          What is the video about?
        </legend>
        <textarea
          className='textarea h-24 w-full font-lora'
          value={about}
          onChange={(event) => setAbout(event.target.value)}
          required></textarea>
      </fieldset>
      <legend className='fieldset-legend font-lora text-sm opacity-60 mt-1'>
        Rate your difficulty level
      </legend>
      <input
        type='range'
        min={0}
        max='100'
        className='range range-sm w-full'
        value={difficulty}
        onChange={(event) => setDifficulty(Number(event.target.value))}
        required
      />
      <fieldset className='fieldset mt-2 w-full'>
        <legend className='fieldset-legend font-lora text-sm opacity-60'>
          What are your expectations?
        </legend>
        <textarea
          className='textarea h-24 w-full font-lora'
          value={manifest}
          onChange={(event) => setManifest(event.target.value)}
          required></textarea>
      </fieldset>
      <button
        className='btn btn-primary font-extrabold text-lg font-raleway mt-4 w-full'
        type='submit'>
        {loading && (
          <span className='loading loading-spinner loading-md'></span>
        )}
        Submit Your Video
      </button>
    </form>
  );
};
export default NewVideoForm;
