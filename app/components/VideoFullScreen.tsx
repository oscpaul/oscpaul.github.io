

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


      

// Use h-dvh and w-screen to ensure the container spans the full screen
<figure>
  <div style={{aspectRatio:'1280 / 720'}} className="h-dvh aspect-video w-full relative">

    <div className="h-dvh w-screen overflow-hidden">
         <div className="gutter-p absolute inset-0 z-md grid-layout py-6">
            <div className="col-span-12 medium:col-span-6 medium:!col-start-7">
                <h2 className="text-white sticky top-[68px] h1">Deploy anywhere</h2>
            </div></div>
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay // Muted is often required for autoplay to work
        muted
        playsInline
        controls={false} // Set to true if you want controls
        onEnded={handleVideoEnd}
        // Ensure the video itself fills the container using object-cover
        className="h-full w-full object-cover"
        
      >
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
</figure>





    );
};

export default FullScreenVideo;