

// components/FullScreenVideo.tsx
'use client'; // If using App Router

import React from 'react'
import { useRef, useState } from 'react';

const FullScreenVideo = ({  }) => {

 const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '/segment (5).mp4', // Replace with your video URLs
    '/segment (17).mp4',
    '/segment (19).mp4',
  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // Loop back to the first video if needed, or stop
      setCurrentVideoIndex(0); // Or stay at the last index
    }
  };




return (


      

<figure className="mx-auto w-auto">
<div style={{aspectRatio:'1280 / 720'}} className="h-auto aspect-video w-full relative">
<button className="absolute w-full h-full inset-0 group z-[1] flex items-center justify-center" aria-label="play video">
  </button>
  <div className="absolute inset-0 w-full h-full flex items-center justify-center">

              <video
        autoPlay
        loop
        muted
        playsInline // Essential for iOS autoplay
        className="object-fill" // Add styling as needed (e.g., Tailwind CSS)
      >
        <source src="/segment (15).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div></div>
      </figure>







    );
};

export default FullScreenVideo;