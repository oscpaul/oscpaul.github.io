    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }


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

const scrollableElement = document.querySelector('.horizontal-container'); // Replace with your element's selector

scrollableElement.addEventListener('scroll', (event) => {
  const scrollPositionX = event.target.scrollLeft;
  console.log('Horizontal scroll position:', scrollPositionX);
  // Implement your desired logic here based on scrollPositionX
});


    
window.addEventListener('scroll', event => {
  if (event.scrollX < 0) {
    console.log('Scrolling up (or attempting to)');
  } else if (event.scrollX*25 > 250) {

gsap.to(".panel.one",{
x:-calculateVwToPx(90),
});
gsap.to(".panel.two",{
x:-calculateVwToPx(90),
});

    console.log('Scrolling right (or attempting to)');
 console.log(event.scrollX);
  }
  // You can also analyze event.deltaX for horizontal wheeling
});



});






