import React from "react";

const videos = [
  {
    id: 1,
    src: "/videos/video1.mp4",
    description: "This is a cool product demo that looks amazing in action!",
  },
  {
    id: 2,
    src: "/videos/video2.mp4",
    description: "Check out our trending item, available in our store now!",
  },
  {
    id: 3,
    src: "/videos/video3.mp4",
    description: "Limited stock alert 🚨 Get yours before it’s gone!",
  },
];

export default function Home() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-black">
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative h-screen w-full flex items-center justify-center snap-start"
        >
          {/* Background Video */}
          <video
            src={video.src}
            className="absolute top-0 left-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
          />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            {/* Description (2-line clamp) */}
            <p className="text-white text-base font-medium line-clamp-2 mb-3">
              {video.description}
            </p>

            {/* Visit Store Button */}
            <button className="px-6 py-2 bg-red-500 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-red-600 transition">
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
