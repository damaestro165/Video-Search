import React from "react";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className=" flex items-center " onClick={() => onVideoSelect(video)}>
      <img
        className="h-[5rem]"
        src={video.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <p className="text-xs p-1 md:p-2  ">{video.snippet.title}</p>
    </div>
  );
}

export default VideoItem;
