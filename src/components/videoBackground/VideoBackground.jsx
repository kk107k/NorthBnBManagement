import React from 'react';
import './videoBackground.css'; 

const VideoBackground = ({ videoSrc, children }) => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-element">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="videoContent">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
