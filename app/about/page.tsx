

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

    <div className="h-dvh w-screen classname3">
              
            
              
            
         
   

      <video
      
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay // Muted is often required for autoplay to work
        muted
        playsInline
        controls={false} // Set to true if you want controls
        onEnded={handleVideoEnd}
        // Ensure the video itself fills the container using object-cover
        className="classname2 h-full w-full object-cover"
        
      >
        Your browser does not support the video tag.
        
      </video>
      
    </div>






    );
};

export default FullScreenVideo;