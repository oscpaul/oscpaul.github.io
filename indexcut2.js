    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }





document.addEventListener("DOMContentLoaded", (event) => {





 



   const targetElement = document.querySelector('.horizontal-container');
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;

    targetElement.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    targetElement.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;

        // You can use diffX to determine the direction and magnitude of the swipe
        if (diffX > 0) {
            console.log('Swiping right:', diffX);
            // Implement your desired action for swiping right
        } else if (diffX < 0) {
            console.log('Swiping left:', diffX);
            // Implement your desired action for swiping left
        }
        // Optionally, prevent default touchmove behavior if you don't want native scrolling
        // e.preventDefault();
    });

    targetElement.addEventListener('touchend', () => {
        isSwiping = false;
        // Reset startX or perform final actions
    });


});



