document.addEventListener("DOMContentLoaded", (event) => {

    Observer.create({
        target: window, // Or any specific element you want to observe
        type: "wheel,touch,scroll,pointer", // Listen for various input types
        onLeft: () => {
            console.log("Scrolling left!");
            // Add your animation or logic here
        },
        onChangeX: (self) => {
            // This callback fires on any change in the x-axis scroll
    



        }
    });


window.addEventListener('wheel', event => {
  if (event.deltaX < 0) {
    console.log('Scrolling up (or attempting to)');
  } else if (event.deltaX*25 > 250) {

gsap.to(".panel.one",{
x:-calculateVwToPx(90),
});
gsap.to(".panel.two",{
x:-calculateVwToPx(90),
});

    console.log('Scrolling right (or attempting to)');
 console.log(event.deltaX);
  }
  // You can also analyze event.deltaX for horizontal wheeling
});



});



