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
      <div className='grid grid-cols-3 gap-4'>
        {user.videos.map((video) => {
          return (
            <div key={video._id} className='bg-base-200 rounded-2xl p-6'>
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
              <div className='font-bold text-lg font-raleway mt-2'>
                {video.title}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
