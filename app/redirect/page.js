import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import { redirect } from "next/navigation";
import User from "@/models/User";
import ClientRedirect from "../components/ClientRedirect";

export default async function RedirectPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  await connectMongo();
  const user = await User.findById(session.user.id);
  const paymentComplete = user.hasAccess;

  if (paymentComplete) {
    redirect("/dashboard");
  }

  return <ClientRedirect />;
}
