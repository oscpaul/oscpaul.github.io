// components/AnimatedBox.jsx
'use client';

import { useEffect, useRef } from 'react';
// Note: We don't import gsap here. It is available globally via the CDN script.

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Check if gsap is available (it should be, due to the CDN script)
    if (typeof window !== 'undefined' && window.gsap) {
      // Use window.gsap to access the library globally
      window.gsap.to(boxRef.current, {
        x: 200,          // Move 200px on the x-axis
        rotation: 360,   // Rotate 360 degrees
        duration: 2,     // Animation lasts 2 seconds
        ease: "power1.inOut" // Use an easing function
      });
    }

    // GSAP automatically handles cleanup in modern versions, but standard React cleanup applies if needed.
    // For more complex animations and better cleanup practices, using the @gsap/react package with useGSAP hook is recommended.
    //

  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      Animate Me
    </div>
  );
};

export default AnimatedBox;
