document.addEventListener("DOMContentLoaded", (event) => {

var var1=1;

const mask = document.querySelectorAll(".mask");
const mask2 = document.querySelectorAll(".mask2");
const mask3 = document.querySelectorAll(".mask3");
const mask4 = document.querySelectorAll(".mask4");



let t1=gsap.timeline();
let t2=gsap.timeline();



 

t1.to( '.svgtext1', {
color:"blue",
duration:0,

})

.to(mask, {
  width: "100%",
duration:2,
})


.to( '.svgtext1', {
color:"black",
duration:0,


})

.to(mask, {
  width: "0%",
duration:0,
})

.to( '.svgtext2', {
color:"blue",
duration:0,

})

.to(mask2, {
  width: "100%",
duration:2,
})


.to( '.svgtext2', {
color:"black",
duration:0,

})


.to(mask2, {
  width: "0%",
duration:0,
})


.to( '.svgtext3', {
color:"blue",
duration:0,

})

.to(mask3, {
  width: "100%",
duration:2,
})


.to( '.svgtext3', {
color:"black",
duration:0,

})


.to(mask3, {
  width: "0%",
duration:0,
})


.to( '.svgtext4', {
color:"blue",
duration:0,

})

.to(mask4, {
  width: "100%",
duration:2,
})


.to( '.svgtext4', {
color:"black",
duration:0,



})


.to(mask, {
  width: "0%",
duration:0,
});





});