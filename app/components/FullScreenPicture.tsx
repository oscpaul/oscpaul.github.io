

// components/FullScreenVideo.tsx
'use client'; // If using App Router

import React from 'react'
import Image from 'next/image'

const FullScreenPicture = () => {
  return (
    <section className="module transparent-header" data-bg="header-bg-transparent">
<div className="relative">
<div className="relative w-full block overflow-hidden">
    <div className="hidden md:block"></div>
    <div className="block md:hidden" style={{paddingTop:'100%'}}></div>
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image
        src="/airloom_wyoming_placeholder.avif" // Local static image (or remote URL)
        alt="A full screen background"
        fill={true} // Step 3: Fill the parent container
        sizes="100vw" // Step 4: Indicate the image is full width of viewport
        style={{ objectFit: 'cover' }} // Step 5: Ensure it covers the area nicely
        priority // Add priority for a hero/background image above the fold
      />
    </div>
    </div>
<div className="absolute left-[18px] right-[18px] top-6 bottom-6 md:top-1/2 md:-translate-x-1/2 md:left-1/2 md:bottom-auto md:right-auto md:-translate-y-1/2 z-sm text-white md:text-center flex md:items-center flex-col justify-between md:justify-start">
<div>
<p className="text-10 border border-grey2 w-fit rounded-md px-2 py-1 uppercase mb-3">41.32210° N, 105.66560° W</p>
</div><div><h3 className="h4">Designed &amp; built in Wyoming, USA</h3>
<p className="md:text-center mt-3 md:mt-4 whitespace-pre-line">Airloom is proud to call Laramie home, thriving within Wyoming's vibrant business innovation ecosystem, where we draw strength from our community and the state’s unparalleled energy resources.</p>
</div></div></div>
</section>
  );
}
export default FullScreenPicture;


