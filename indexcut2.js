    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }
document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


const myDiv = document.getElementById('svgtext2');

myDiv.addEventListener('click', function() {
gsap.to(".section-1", {
  xPercent: -90,
  duration: 1,
  ease: "power2.inOut"
});

gsap.to(".section-2", {
  xPercent: -90,
  duration: 1,
  ease: "power2.inOut"
},"<");

});


window.addEventListener("wheel", (event) => {
  // event.deltaY will be positive for scrolling down, negative for scrolling up
  // event.deltaX will be positive for scrolling right, negative for scrolling left

  if (event.deltaX > 0) {
    console.log("Simulated scroll down detected (no room to scroll)");
    // Perform actions for "scrolling down"
  } else if (event.deltaX < 0) {
    console.log("Simulated scroll up detected (no room to scroll)");
   gsap.to(".section-1", {
  xPercent: 0,
  duration: 1,
  ease: "power2.inOut"
});

gsap.to(".section-2", {
  xPercent: 0,
  duration: 1,
  ease: "power2.inOut"
},"<");
  }

  // You can also prevent default scroll behavior if desired,
  // though it might not be necessary if there's no actual scrollable content.
  // event.preventDefault();
});

const mask = document.querySelectorAll(".mask");
const mask2 = document.querySelectorAll(".mask2");
const mask3 = document.querySelectorAll(".mask3");
const mask4 = document.querySelectorAll(".mask4");

let t1=gsap.timeline();

// For the entire window/page
window.addEventListener('scroll', function() {
  // Code to execute when the page is scrolled
  console.log('Page scrolled!');
});

// For a specific element
const scrollableDiv = document.getElementById('yourScrollableElementId');
scrollableDiv.addEventListener('scroll', function() {
  // Code to execute when the div is scrolled
  console.log('Div scrolled!');
});



});



