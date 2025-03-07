"use client";

import { useState } from "react";
import Link from "next/link";

function AcceptButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      {/* Button to Open Modal */}
      <button
        className="btn btn-primary rounded-lg font-sohne-medium text-secondary text-lg p-5 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        Accept Challenge
      </button>

      {/* Modal (conditionally rendered) */}
      {isOpen && (
        <div
          className="modal modal-bottom sm:modal-middle modal-open text-start"
          onClick={() => setIsOpen(false)} // Click outside to close
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {/* Checkbox Option */}
            <label className="flex items-center gap-2 mt-4 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <h3 className="text-xl font-sohne-bold">
                Yes<span className="font-bold">!</span> Upgrade My Order for{" "}
                <span className="font-bold">$</span>37
              </h3>
            </label>

            {/* Modal Content */}

            <p className="text-red-500 font-mt-bold">
              (<span className="font-sohne-bold">One-Time Offer</span>{" "}
              <span className="text-gray-500 line-through">$97</span>)
            </p>

            <p className="py-3 font-mt-regular">
              Want to turn your challenge videos into $$$, even with zero
              subscribers? Just the 2 videos from this challenge!
            </p>
            <p className="font-mt-regular">
              Get the{" "}
              <span className="font-mt-bold">Monetization Blueprint</span>—a
              step-by-step system to convert video traffic into money (without
              AdSense). I’ll help you create a free offer to attract viewers and
              turn them into paying customers—fast.
            </p>

            {/* Bullet Points */}
            <p className="font-mt-regular py-3">
              ✔️ No 1,000 subs needed (just your 2 videos)
              <br />
              ✔️ Free product + simple upsell strategy
              <br />
              ✔️ Fastest way to make your first $100
              <br />
            </p>

            <p className="font-mt-regular">
              <span className="font-mt-bold">🔥 Click YES</span> to start making
              money from your content now!
            </p>

            {/* Modal Actions */}
            <div className="modal-action">
              <Link href="/checkout">
                <button className="btn btn-primary rounded-lg font-sohne-medium text-secondary text-lg p-5 shadow-md">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AcceptButton;
