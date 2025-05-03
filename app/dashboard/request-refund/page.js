import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Image from "next/image";

import RequestRefundForm from "@/app/components/RequestRefundForm";

export default async function RequestRefund() {
  const session = await auth();

  await connectMongo();

  const user = await User.findById(session.user.id).populate("videos");

  const numOfVids = user.videos.length;

  if (numOfVids < 2) {
    return (
      <main>
        <div className='font-black font-raleway text-3xl text-center'>
          Your $14 is almost yours!
        </div>
        <div className='font-lora text-lg text-center opacity-80 mb-6'>
          You just have {2 - numOfVids} more video(s) to go
        </div>
        <Image
          src='https://64.media.tumblr.com/40a5071ba54b5f409bf287baf18628c2/tumblr_nv2kwgy62j1ra9sgzo1_500.gif' // Replace with your GIF URL
          alt='Animated GIF'
          width={300}
          height={300}
          className='rounded-xl shadow-xl border-2 border-neutral mx-auto'
          unoptimized={true}
        />
        <div className='font-lora text-lg text-center opacity-80 mt-6'>
          You will have what is rightfully yours
        </div>
      </main>
    );
  }

  return (
    <main>
      <RequestRefundForm />
      <div className='text-center'>
        <div className='font-raleway text-lg font-bold opacity-60 mt-2'>
          You will hear back within 24 hours
        </div>
        <div className='font-lora opacity-60'>
          Feel free hit me up{" "}
          <a href='mailto:jagat@2weeks2videos.com' className='link'>
            jagat@2weeks2videos.com
          </a>
        </div>
      </div>
    </main>
  );
}
