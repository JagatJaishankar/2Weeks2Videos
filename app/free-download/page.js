import Image from "next/image";

export default function FreeDownloadPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center">
      {/* Headline */}
      <h1 className="font-outfit font-extrabold md:text-5xl text-4xl text-red-600 mb-2">
        The High-Retention Video Blueprint
      </h1>
      <h2 className="font-outfit font-bold md:text-3xl text-2xl text-gray-800 mb-6">
        Discover the Secret Formula to Create Engaging Videos That Keep Viewers
        Hooked & Skyrocket Your Watch Time
      </h2>

      {/* Parent Grid Container for Equal Heights */}
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
        {/* Left: Image */}
        <div className="flex items-stretch">
          <Image
            src={"/perfect-video-blueprint.png"}
            alt="Perfect YouTube Video Blueprint"
            priority={true}
            width={600}
            height={400} // Ensure the height is known for reference
            className="rounded-lg shadow-xl object-cover w-full h-full"
          />
        </div>

        {/* Right: Form with Equal Height */}
        <div className="flex items-stretch">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-base-200 w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-outfit font-bold text-secondary mb-3">
                FREE Instant Access!
              </h3>
              <p className="font-lora opacity-80 mb-4">
                Enter your best email below, and I&apos;ll send you a
                <span className="font-medium"> FREE blueprint</span> on creating
                <span className="font-semibold"> highly engaging videos</span>.
              </p>

              {/* Email Input */}
              <label className="input validator w-full font-lora">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="name@example.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>

            {/* CTA Button */}
            <button className="btn btn-primary font-outfit font-bold text-lg mt-4">
              Get My Free Blueprint
            </button>

            <p className="text-xs mt-3">
              🔒{" "}
              <span className="opacity-60 font-lora">
                Your information is secure and will never be shared.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Additional Trust & Urgency Section */}
      <p className="text-center opacity-80 text-sm font-lora mt-4 max-md:block hidden">
        <span className="font-semibold">
          Trusted by top content creators & influencers.
        </span>
        <br /> Used to generate millions of views on YouTube.
        <br />
        <span className="font-bold text-red-600">
          This blueprint is available for a limited time only!
        </span>
      </p>
      <p className="text-center opacity-80 text-lg font-lora mt-4 md:block hidden">
        Trusted by top content creators and video marketers, this training has
        been used to generate millions of views on YouTube and other platforms.
        This blueprint is available for a limited time only!
      </p>
    </section>
  );
}
