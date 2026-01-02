

// components/FullScreenVideo.tsx
'use client'; // If using App Router

import React from 'react'
const FullScreenVideo = ({  }) => {
  return (

<figure className="mx-auto w-auto">
    <div className="z-videoModalShadow pointer-events-none bg-black bg-opacity-80 fixed inset-0 opacity-0"></div>
    <div className="h-screen w-full relative">
            
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <video
        autoPlay
        loop
        muted
        playsInline // Essential for iOS autoplay
        className="w-full h-screen object-cover" // Add styling as needed (e.g., Tailwind CSS)
      >
        <source src="/segment (5).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
                </div></div>
                
                
                
                <div className="z-videoModal fixed top-5 right-5 opacity-0 pointer-events-none"><button aria-label="Close Video"><div className="w-3.5 relative"><span className="translate-y-0 rotate-45 block w-full h-px bg-white absolute duration-[var(--duration)] ease transition-transform"></span><span className="translate-y-0 -rotate-45 block w-full h-px bg-white absolute duration-[var(--duration)] ease transition-transform"></span>
                </div></button></div>
    </figure>
    );
};

export default FullScreenVideo;