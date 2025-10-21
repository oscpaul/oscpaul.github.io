    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }





document.addEventListener("DOMContentLoaded", (event) => {

const draggableElement = document.querySelector(".panel.one");
const startX = draggableElement.offsetLeft;
const myDiv = document.getElementById('svgtext2');
let draggable3= Draggable.create(".panel.three",{
type:"x",

onDrag:function(){

const distanceXend = (this.x)


if (distanceXend >= -2100 ) {

gsap.to(".panel.two",{
x:this.x,
duration:0,
});


if (distanceXend >= -1300)
      // Snap to the target if the threshold is met
{

console.log('snap');
this.disable();
draggable2.enable();

}

}

},



})[0];
draggable3.disable();









let draggable2= Draggable.create(".panel.two",{


type:"x",
onDrag:function(){



const distanceXend = (this.x)


if (distanceXend >= -900 ) {

gsap.to(".panel.one",{
x:this.x,
duration:0,
});


if (distanceXend >= -100)
      // Snap to the target if the threshold is met
{

console.log('snap');
this.disable();
draggable1.enable();

}

}

else{

gsap.to(".panel.three",{
x:this.x,
duration:0,
});



if (distanceXend <= -2100)
      // Snap to the target if the threshold is met
{

console.log('snap');
this.disable();
draggable3.enable();

}








}

},

})[0];
draggable2.disable();
 






let draggable1= Draggable.create(".panel.one",{
type:"x",
intertia:true,

onDrag:function(){
  const distanceX = (this.x - startX);
if (distanceX >= 10 ) {
      // Snap to the target if the threshold is met
console.log("distance");
gsap.to(".panel.one",{
x:0,
});

gsap.to(".panel.two",{
x:0,
});


    } else {
      // Snap back to the original position if not
    }



    const distanceXend = (this.x)
    

if (distanceXend <= -900 ) {
      // Snap to the target if the threshold is met
console.log("distancexend");


gsap.to(".panel.one",{
x:-900,

});

gsap.to(".panel.two",{
x:-900,

});


this.disable();
draggable2.enable();

    } else {
      // Snap back to the original position if not
    }
    
gsap.to(".panel.two",{
x:this.x,
duration:0,

});
},
 onDragEnd: function() {

  }
})[0];


});
