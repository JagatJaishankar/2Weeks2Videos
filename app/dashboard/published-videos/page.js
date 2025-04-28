import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Video from "@/models/Video";

async function getUser() {
  const session = await auth();

  await connectMongo();

  return await User.findById(session.user.id).populate("videos");
}

export default async function PublishedVideos() {
  const user = await getUser();
  return (
    <main>
      <h1 className='font-black font-raleway text-3xl text-center'>
        Your Submitted Video(s)
      </h1>
      <div className='font-lora text-lg text-center opacity-80 mb-6'>
        {user.videos.length} video(s) submitted so far
      </div>
      <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-4 mx-auto'>
        {user.videos.map((video) => {
          return (
            <div
              key={video._id}
              className='bg-base-200 rounded-2xl p-6 max-w-lg relative'>
              <button className='btn bg-base-200 absolute top-0 right-0 p-5 max-sm:p-3'>
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
                    d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
              </button>
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
              <div className='font-bold text-lg font-raleway mt-2 text-center'>
                {video.title}
              </div>
              <div className='divider'>
                <div className='badge badge-outline font-lora'>
                  <span className='font-bold'>{video.difficulty}%</span>{" "}
                  difficulty
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
            </div>
          );
        })}
      </div>
    </main>
  );
}
