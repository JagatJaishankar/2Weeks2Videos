"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      className='btn btn-ghost font-raleway text-lg font-extrabold'
      onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export default LogoutButton;
