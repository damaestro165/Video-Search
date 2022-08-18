import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoView }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoView}
      />
    );
  });
  return <div className="flex gap-2 flex-col">{renderedList}</div>;
}

export default VideoList;
