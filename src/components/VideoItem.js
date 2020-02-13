import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image image-width"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <p>{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoItem;
