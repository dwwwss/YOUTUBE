import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 w-80 rounded-lg shadow-lg">
      <img className="rounded-lg" alt="yt-video" src={thumbnails.medium.url} />
      <h1 className="font-bold py-2">{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>{statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
