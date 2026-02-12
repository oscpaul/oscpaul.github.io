"use client";

import { useState, useEffect, useRef } from "react";

// Different aspect ratios: taller than before
const images = [
  "https://picsum.photos/id/1015/800/400", // taller
  "https://picsum.photos/id/1016/800/500", // even taller
  "https://picsum.photos/id/1018/800/450",
];

export default function InfiniteSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);

  // Set slide width on client
  useEffect(() => {
    const updateWidth = () => setSlideWidth(window.innerWidth * 0.5);
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Handle click to slide
  const handleClick = () => {
    setIndex((prev) => prev + 1);
  };

  // Apply transform and infinite loop with smooth easing
  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideWidth === 0) return;

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    const handleTransitionEnd = () => {
      if (index >= images.length) {
        setIndex(0);
        if (track) {
          track.style.transition = "none"; // instantly reset
          track.style.transform = `translateX(0px)`;
        }
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, slideWidth]);

  return (
    <div
      className="relative w-[95vw] h-[450px] overflow-hidden border-2 border-gray-800 cursor-pointer mx-auto bg-white"
      onClick={handleClick}
    >
      <div ref={trackRef} className="absolute top-0 left-0 flex h-full items-center">
        {images.concat(images).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            draggable={false}
            className="flex-shrink-0 w-[50vw] object-cover select-none rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
