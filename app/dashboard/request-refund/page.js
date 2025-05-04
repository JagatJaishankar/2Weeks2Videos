import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Image from "next/image";

import RequestRefundForm from "@/app/components/RequestRefundForm";

function getDaysBetween(date1, date2) {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  return Math.floor(diffInTime / ONE_DAY);
}

export default async function RequestRefund() {
  const session = await auth();
  await connectMongo();

  const user = await User.findById(session.user.id).populate("videos");
  const users = await User.findById(session.user.id).populate("refunds");

  const numOfVids = user.videos.length;
  const startTime = new Date(user.startTime);
  const today = new Date();
  const daysPassed = getDaysBetween(startTime, today);
  const deadlinePassed = daysPassed >= 14;
  const hasSubmittedForm = users.refunds.length > 0;

  if (deadlinePassed) {
    return (
      <main>
        <div className='font-black font-raleway text-3xl text-center'>
          Challenge Failed 🚨
        </div>
        <div className='font-lora text-lg text-center opacity-80 mb-6'>
          Unfortunately, you missed the deadline.
        </div>
        <Image
          src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzA2YnpncnhrYXk5b29sa242a3p4Nng5aXRoNXRnOW5ucWtpZGtsciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aWPGuTlDqq2yc/giphy.gif'
          alt='Challenge Failed GIF'
          width={400}
          height={400}
          className='rounded-xl shadow-xl border-2 border-neutral mx-auto'
          unoptimized={true}
        />
        <div className='font-lora text-lg text-center opacity-80 mt-6'>
          Don&apos;t worry, we have more challenges coming up.
        </div>
      </main>
    );
  }

  if (hasSubmittedForm) {
    return (
      <main>
        <div className='font-black font-raleway text-3xl text-center'>
          Form Submitted ✔️
        </div>
        <div className='font-lora text-lg text-center opacity-80 mb-6'>
          We have received your request!
        </div>
        <Image
          src='https://media.giphy.com/media/RIhNQOjGa39Ze/giphy.gif?cid=ecf05e47bwt64vky2ta6msmaeh6nt6cuxbdsx7u26cbw9luk&ep=v1_gifs_related&rid=giphy.gif&ct=g'
          alt='Form Submitted GIF'
          width={300}
          height={300}
          className='rounded-xl shadow-xl border-2 border-neutral mx-auto'
          unoptimized={true}
        />
        <div className='font-lora text-lg text-center opacity-80 mt-6'>
          You will hear back from me within 24 hours.
        </div>
        <div className='font-lora opacity-60 text-center'>
          Feel free hit me up{" "}
          <a href='mailto:jagat@2weeks2videos.com' className='link'>
            jagat@2weeks2videos.com
          </a>
        </div>
      </main>
    );
  }

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
