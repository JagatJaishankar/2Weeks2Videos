import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Refund from "@/models/Refund";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.url) {
      return NextResponse.json(
        { error: "YouTube channel URL is required" },
        { status: 400 }
      );
    }

    if (!body.source) {
      return NextResponse.json({ error: "Where is required" }, { status: 400 });
    }

    if (!body.like) {
      return NextResponse.json(
        { error: "What you liked is required" },
        { status: 400 }
      );
    }

    if (!body.struggle) {
      return NextResponse.json(
        { error: "What you struggled with is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Not authorised" }, { status: 401 });
    }

    await connectMongo();

    const user = await User.findById(session.user.id);

    const refund = await Refund.create({
      userID: user._id,
      url: body.url,
      source: body.source,
      like: body.like,
      struggle: body.struggle,
    });

    user.refunds.push(refund._id);
    await user.save();

    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
