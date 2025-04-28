import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Video from "@/models/Video";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.title) {
      return NextResponse.json(
        { error: "Video title is required" },
        { status: 400 }
      );
    }

    if (!body.url) {
      return NextResponse.json(
        { error: "Video URL is required" },
        { status: 400 }
      );
    }

    if (!body.about) {
      return NextResponse.json(
        { error: "Video description is required" },
        { status: 400 }
      );
    }

    if (!body.difficulty) {
      return NextResponse.json(
        { error: "Difficulty level is required" },
        { status: 400 }
      );
    }

    if (!body.manifest) {
      return NextResponse.json(
        { error: "Video expectation is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Not authorised" }, { status: 401 });
    }

    await connectMongo();

    const user = await User.findById(session.user.id);

    const video = await Video.create({
      userID: user._id,
      title: body.title,
      url: body.url,
      about: body.about,
      difficulty: body.difficulty,
      manifest: body.manifest,
    });

    user.videos.push(video._id);
    await user.save();

    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const videoId = searchParams.get("videoID");

    if (!videoId) {
      return NextResponse.json(
        { error: "VideoID is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Not authorised" }, { status: 401 });
    }

    await connectMongo();

    await Video.deleteOne({
      _id: videoId,
      userID: session?.user?.id,
    });

    const user = await User.findById(session?.user?.id);
    user.videos = user.videos.filter((id) => id.toString() !== videoId);
    await user.save;

    return NextResponse.json({});

    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
