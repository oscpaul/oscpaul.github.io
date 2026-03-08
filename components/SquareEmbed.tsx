"use client";

import { useEffect, useRef } from "react";

export default function SquareWithImageAndMap() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://square.site/appointments/buyer/widget/2pefuflo2hw9e3/LCTHN7ABYT9JV.js";
    script.async = true;

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 px-4 py-8 space-y-10">

      {/* Two-column section: Widget + Picture */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-stretch">
        
        {/* Left: Square Embed */}
        <div
          ref={widgetRef}
          className="
            w-full md:w-1/2
            rounded-lg bg-white p-4 shadow-md
            min-h-[350px] md:min-h-[400px]
          "
        />

        {/* Right: Image */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg min-h-[350px] md:min-h-[400px]">
          <img
            src="/images/2brothers-4_Nero_AI_Image_Sharpener_Sharp_Face.webp" // Replace with your image
            alt="Garage or service image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>

      {/* Map below */}
      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <div className="w-full aspect-[4/3]">
          <iframe
            src="https://www.google.com/maps?q=915+S+Westwood+Ave,+Addison,+IL+60101&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
}
