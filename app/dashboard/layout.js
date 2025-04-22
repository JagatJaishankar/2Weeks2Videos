import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PrivateDashboard({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return children;
}
