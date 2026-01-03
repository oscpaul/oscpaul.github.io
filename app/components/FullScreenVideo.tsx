

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
<section className="mb-[72px] md:mb-48 ">
    <div className="module transparent-header" data-bg="header-bg-transparent">
        <div className="relative"><div className="gutter-p absolute inset-0 z-md grid-layout py-6">
            <div className="col-span-12 medium:col-span-6 medium:!col-start-7">
                <h2 className="text-white sticky top-[68px] h1">Deploy anywhere</h2>
            </div></div>
        <figure className="mx-auto w-auto">
    <div className="z-videoModalShadow pointer-events-none bg-black bg-opacity-80 fixed inset-0 opacity-0"></div>
    <div className="h-screen w-full relative">
            
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
      {/* Optionally show status */}
      
                </div></div>
                
                
                
                <div className="z-videoModal fixed top-5 right-5 opacity-0 pointer-events-none"><button aria-label="Close Video"><div className="w-3.5 relative"><span className="translate-y-0 rotate-45 block w-full h-px bg-white absolute duration-[var(--duration)] ease transition-transform"></span><span className="translate-y-0 -rotate-45 block w-full h-px bg-white absolute duration-[var(--duration)] ease transition-transform"></span>
                </div></button></div>
    </figure>
                    </div></div>
                
                </section>
    );
};

export default FullScreenVideo;