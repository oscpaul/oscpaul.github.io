    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }
document.addEventListener("DOMContentLoaded", (event) => {
// Register the Draggable and Inertia plugins
gsap.registerPlugin(Draggable, InertiaPlugin);

// Get the array of sections
let sections = gsap.utils.toArray(".panel");
let totalWidth = (sections.length - 1) * 100; // Total percentage to drag

Draggable.create(".snap-wrapper", {
  type: "x", // Restrict dragging to the horizontal axis
  inertia: true, // Enable inertia for a smooth snap effect
  
  // Set the boundaries for the dragging motion
  bounds: ".horizontal-container",
  
  // Configure snapping
  snap: {
    x: gsap.utils.snap(-100, (value) => {
      // Calculate the snap value based on the closest multiple of -100
      // Clamping ensures the snap point stays within the allowed boundaries
      let clampedValue = Math.min(0, Math.max(-totalWidth, value));
      let snapTarget = Math.round(clampedValue / 100) * 100;
      return snapTarget;
    })
  },
  
  // When the drag ends, animate to the snapped position
  onDragEnd: function() {
    gsap.to(this.target, {
      x: this.x,
      ease: "power2.out"
    });
  }
});

});







