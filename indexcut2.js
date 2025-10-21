    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }
document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


const draggableDiv = document.getElementById('draggableDiv');

let isDragging = false;
let startX, startY;
let initialX, initialY;

draggableDiv.addEventListener('touchstart', (e) => {
  isDragging = true;
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
  initialX = draggableDiv.offsetLeft;
  initialY = draggableDiv.offsetTop;
  draggableDiv.style.cursor = 'grabbing';
});

draggableDiv.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent default scrolling behavior
  const touch = e.touches[0];
  const deltaX = touch.clientX - startX;
  const deltaY = touch.clientY - startY;

  draggableDiv.style.left = (initialX + deltaX) + 'px';
  draggableDiv.style.top = (initialY + deltaY) + 'px';
});

draggableDiv.addEventListener('touchend', () => {
  isDragging = false;
  draggableDiv.style.cursor = 'grab';
});

// Optional: Add mouse events for desktop compatibility
draggableDiv.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  initialX = draggableDiv.offsetLeft;
  initialY = draggableDiv.offsetTop;
  draggableDiv.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  draggableDiv.style.left = (initialX + deltaX) + 'px';
  draggableDiv.style.top = (initialY + deltaY) + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggableDiv.style.cursor = 'grab';
});


});





