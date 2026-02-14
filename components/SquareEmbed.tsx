"use client";

import { useEffect, useRef } from "react";

export default function SquareWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
        "https://square.site/appointments/buyer/widget/2pefuflo2hw9e3/LCTHN7ABYT9JV.js"
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="w-full max-w-4xl"
      />
    </div>
  );
}
