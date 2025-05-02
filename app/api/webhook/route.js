import { NextResponse } from "next/server";
import crypto from "crypto";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(request) {
  const secret = process.env.LS_SIGNING_SECRET;

  if (!secret) {
    return NextResponse.json("Required env secrets not set!", { status: 400 });
  }

  const rawBody = await request.text();
  const signature = Buffer.from(
    request.headers.get("X-Signature") || "",
    "hex"
  );

  if (signature.length === 0 || rawBody.length === 0) {
    return NextResponse.json("Invalid request", { status: 400 });
  }

  const hmac = Buffer.from(
    crypto.createHmac("sha256", secret).update(rawBody).digest("hex"),
    "hex"
  );

  if (!crypto.timingSafeEqual(hmac, signature)) {
    return NextResponse.json("Invalid signature", { status: 400 });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch (err) {
    return NextResponse.json("Invalid JSON", { status: 400 });
  }

  await connectMongo();

  const userId = payload?.meta?.custom_data?.user_id;
  const customerId = payload?.data?.attributes?.customer_id;

  if (!userId || !customerId) {
    return NextResponse.json("Missing user ID or customer ID", { status: 400 });
  }

  const user = await User.findById(userId);
  if (user) {
    user.hasAccess = true;
    user.customerId = payload.data.attributes.customer_id;
    user.isSmart = payload.meta.custom_data.is_smart === "true";
    user.startTime = Date.now();
    await user.save();
  }

  return NextResponse.json("OK", { status: 200 });
}
