"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "2W2V Challenge" },
    { href: "/dashboard/video-one", label: "Video #01" },
    { href: "/dashboard/video-two", label: "Video #02" },
    { href: "/dashboard/request-refund", label: "Request Refund" },
    { href: "/dashboard/resources", label: "Challenge Blueprint" },
    { href: "/dashboard/smart-youtuber", label: "Smart YouTuber" },
  ];

  return (
    <ul className='menu bg-base-200 text-base-content min-h-full w-72 p-4 justify-center text-lg space-y-2'>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`${
              pathname === href
                ? "btn btn-neutral btn-active font-lora font-bold text-lg justify-start"
                : "font-lora"
            }`}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
