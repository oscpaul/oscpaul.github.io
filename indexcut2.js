    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }
document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


const myDiv = document.getElementById('svgtext2');



const mask = document.querySelectorAll(".mask");
const mask2 = document.querySelectorAll(".mask2");
const mask3 = document.querySelectorAll(".mask3");
const mask4 = document.querySelectorAll(".mask4");

let t1=gsap.timeline();

t1.to( '.svgtext1', {
color:"blue",
duration:0,
})
.to(mask, {
  width: "100%",
duration:20,
})
.to( '.svgtext1', {
color:"black",
duration:0,
})
.to(window, { scrollTo: { x: ".section-2" }, duration: 1 
})




.to( '.svgtext2', {
color:"blue",
duration:0,
})
.to(mask2, {
  width: "100%",
duration:20,
})
.to( '.svgtext2', {
color:"black",
duration:0,
})
.to(window, { scrollTo: { x: ".section-3" }, duration: 1 
})



.to( '.svgtext3', {
color:"blue",
duration:0,
})
.to(mask3, {
  width: "100%",
duration:20,
})
.to( '.svgtext3', {
color:"black",
duration:0,
})
.to(window, { scrollTo: { x: ".section-4" }, duration: 1 
})


.to( '.svgtext4', {
color:"blue",
duration:0,
})
.to(mask4, {
  width: "100%",
duration:20,
})
.to( '.svgtext4', {
color:"black",
duration:0,
})



});




