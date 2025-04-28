import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Video from "@/models/Video";
import { auth } from "@/auth";
import Link from "next/link";
import VideoLink from "@/app/components/VideoLink";
import DeleteVideoButton from "@/app/components/DeleteVideoButton";

const getVideo = async (videoID, userId) => {
  await connectMongo();
  const video = await Video.findOne({
    _id: videoID,
    userID: userId,
  });

  return video;
};

export default async function VideoPage({ params }) {
  const { videoID } = await params;

  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const video = await getVideo(videoID, session.user.id);

  if (!video) {
    redirect("/dashboard");
  }

  return (
    <main>
      <Link
        href={"/dashboard/published-videos"}
        className='absolute lg:left-1 max-lg:right-1 top-2 btn btn-ghost'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5'
          />
        </svg>{" "}
        Back
      </Link>
      <div className='max-w-2xl'>
        <figure className='aspect-video'>
          <iframe
            src={`https://www.youtube.com/embed/${
              video.url.includes("watch?v=")
                ? video.url.split("watch?v=")[1].split("&")[0]
                : video.url.split("/").pop().split("?")[0]
            }?modestbranding=1`}
            title='YouTube video player'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full rounded-xl'></iframe>
        </figure>
        <h1 className='font-black font-raleway text-3xl text-center mt-6'>
          {video.title}
        </h1>
        <VideoLink url={video.url} />
        <div className='divider'>
          <div className='badge badge-outline font-lora'>
            <span className='font-bold'>{video.difficulty}%</span> difficulty
          </div>
        </div>
        <div className='font-lora opacity-80'>
          <span className='font-raleway font-bold'>
            What is the video about?{" "}
          </span>
          {video.about}
        </div>
        <div className='font-lora opacity-80 mt-4'>
          <span className='font-raleway font-bold'>
            Your expectations of the video:{" "}
          </span>
          {video.manifest}
        </div>
        <div className='divider'></div>
        <div className='text-center'>
          <DeleteVideoButton videoID={videoID.toString()} />
        </div>
      </div>
    </main>
  );
}
