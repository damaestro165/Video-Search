import React from "react";

function VideoDetail({ video }) {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="border mb-2 w-full">
      <div>
        <iframe
          src={videoSrc}
          title="video player"
          className="w-full h-[12.5rem] md:h-[22.5rem]"
        />
      </div>
      <div className="p-2">
        <h4 className="text-sm mb-2 font-semibold ">{video.snippet.title}</h4>
        <p className="text-xs">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
