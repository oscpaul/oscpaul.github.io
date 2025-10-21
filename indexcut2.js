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





});







