import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";

const config = {
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "noreply@resend.2weeks2videos.com",
      name: "Email",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  // pages: {
  //   signIn: "/signin", // this is the path to your custom sign-in page
  // },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
