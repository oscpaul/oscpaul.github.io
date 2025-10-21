    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }
document.addEventListener("DOMContentLoaded", (event) => {





const myDiv = document.getElementById('svgtext2');

myDiv.addEventListener('click', function() {
gsap.to(".panel.one", {
  xPercent: -90,
  duration: 1,
  ease: "power2.inOut"
});

gsap.to(".panel.two", {
  xPercent: -90,
  duration: 1,
  ease: "power2.inOut"
});



let myObserver = Observer.create({
  target: ".panel.one",
  type: "pointer", // Listens for mouse and touch events
  onDrag: () => {
    console.log("Observer is detecting a drag!");
  },
  onPress: () => {
    console.log("Pointer press detected.");
  },
  onRelease: () => {
    console.log("Pointer release detected.");
  },
});

});


});





