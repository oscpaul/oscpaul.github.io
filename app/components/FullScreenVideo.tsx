

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
   <div className="gutter-p absolute inset-0 z-md grid-layout py-6">
            <div className="col-span-12 medium:col-span-6 medium:!col-start-7">
                <h2 className="text-white sticky top-[68px] h1">Deploy anywhere</h2>
            </div></div>
<button className="absolute w-full h-full inset-0 group z-[1] flex items-center justify-center" aria-label="play video">
  </button>
  <div className="absolute inset-0 w-full h-full flex items-center justify-center">

           <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay // Muted is often required for autoplay to work
        muted
        playsInline
        controls={false} // Set to true if you want controls
        onEnded={handleVideoEnd}
        style={{ width: '100%' }} // Basic styling
      />
      </div></div>
      </figure>







    );
};

export default FullScreenVideo;