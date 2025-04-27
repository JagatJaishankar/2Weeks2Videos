"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div className='text-center'>
      <button
        className='btn btn-ghost btn-active font-raleway text-lg font-extrabold'
        onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default LogoutButton;
