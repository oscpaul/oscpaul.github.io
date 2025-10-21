    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }
document.addEventListener("DOMContentLoaded", (event) => {

let sections = gsap.utils.toArray(".panel");
let totalWidth = (sections.length - 1) * 100; // Total percentage to drag

// Example using Draggable from GSAP with InertiaPlugin
var myDraggable = Draggable.create(".snap-wrapper", {
    type: "x", // or "x", or "y"
    inertia: true,
  bounds: ".horizontal-container",
  
 snap: {
    x: gsap.utils.snap(-100, (value) => {
      // Calculate the snap value based on the closest multiple of -100
      // Clamping ensures the snap point stays within the allowed boundaries
      let clampedValue = Math.min(0, Math.max(-totalWidth, value));
      let snapTarget = Math.round(clampedValue / 100) * 100;
      return snapTarget;
    })
  },


 onDragEnd: function() {
    gsap.to(this.target, {
      x: this.x,
      ease: "power2.out"
    });
  }





});


});






