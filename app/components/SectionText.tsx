

// components/FullScreenVideo.tsx
'use client'; // If using App Router

import React from 'react'
import Image from 'next/image'

const SectionText = () => {
  return (

    <div className="grid-layout gutter-p pt-6 gap-y-9 module">
      <div className="col-span-6 md:col-span-3"><p>Low wind sites</p>
      <p className="text-grey3 w-full max-w-[330px]">Easy to optimize for an average resource of 5-7 meters/second</p></div>
      <div className="col-span-6 md:col-span-3"><p>Sites with height restrictions</p>
      <p className="text-grey3 w-full max-w-[330px]">Airports and military installations</p></div>
      <div className="col-span-6 md:col-span-3"><p>Difficult access sites</p>
      <p className="text-grey3 w-full max-w-[330px]">Mountainous areas, islands, and other sites with minimal infrastructure</p></div>
      <div className="col-span-6 md:col-span-3"><p>Smaller visual signature</p>
      <p className="text-grey3 w-full max-w-[330px]">Viable in locations where view planes are important</p></div></div>
  );
}
export default SectionText;


