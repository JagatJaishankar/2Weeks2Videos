import LogoutButton from "../components/LogoutButton";
import CheckoutButton from "../components/CheckoutButton";
import CountdownTimer from "../components/CountdownTimer";

import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export default async function Dashboard() {
  const session = await auth();

  await connectMongo();
  const user = await User.findById(session.user.id);

  const startTime = user.startTime;

  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-6'>
      <div className='text-center font-raleway font-black text-4xl'>
        2W2V Challenge
      </div>
      <div className='font-lora'>
        <span className='font-raleway font-bold'>Started On: </span>
        {new Date(user.startTime).toLocaleString("en-IN", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <CountdownTimer startTime={startTime} />
      <div className='mt-2'>
        <LogoutButton />
      </div>
      <div className='mt-2'>
        <CheckoutButton />
      </div>
    </main>
  );
}
