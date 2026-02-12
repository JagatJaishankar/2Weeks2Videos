import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import {
  lemonSqueezySetup,
  createCheckout,
} from "@lemonsqueezy/lemonsqueezy.js";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.successUrl) {
      return NextResponse.json(
        { error: "Success URL is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    await connectMongo();

    const user = await User.findById(session.user.id);

    lemonSqueezySetup({ apiKey: process.env.LS_API_KEY });

    const checkoutLS = await createCheckout(
      Number(process.env.LS_STORE_ID),
      Number(process.env.LS_VARIANT_ID_SMART),
      {
        productOptions: { redirectUrl: body.successUrl },
        checkoutData: {
          email: user.email,
          custom: {
            userId: user._id.toString(),
            isSmart: JSON.stringify(true),
          },
        },
      }
    );

    console.log("LemonSqueezy response:", JSON.stringify(checkoutLS, null, 2));

    if (checkoutLS.error) {
      console.error("LemonSqueezy error:", checkoutLS.error);
      return NextResponse.json({ error: checkoutLS.error.message }, { status: 400 });
    }

    if (!checkoutLS.data?.data?.attributes?.url) {
      console.error("Unexpected response structure:", checkoutLS);
      return NextResponse.json({ error: "Invalid response from payment provider" }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutLS.data.data.attributes.url });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
