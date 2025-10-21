    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }





document.addEventListener("DOMContentLoaded", (event) => {

const draggableElement = document.querySelector(".panel.one");
const startX = draggableElement.offsetLeft;
const myDiv = document.getElementById('svgtext2');


let draggable4= Draggable.create(".panel.four",{
type:"x",
onDrag:function(){
const distanceXend = (this.x)

if (distanceXend >= -calculateVwToPx(270) ) {

gsap.to(".panel.three",{
x:this.x,
duration:0,
});

if (distanceXend >= -calculateVwToPx(210))
      // Snap to the target if the threshold is met
{

console.log('three disable');
this.disable();
draggable3.enable();

gsap.to(".panel.three",{
x:-calculateVwToPx(180),
duration:0,
});
}


}








},



})[0];
draggable4.disable();


let draggable3= Draggable.create(".panel.three",{
type:"x",

onDrag:function(){

const distanceXend = (this.x)


if (distanceXend >= -calculateVwToPx(180) ) {

gsap.to(".panel.two",{
x:this.x,
duration:0,
});


if (distanceXend >= -calculateVwToPx(120))
      // Snap to the target if the threshold is met
{

console.log('three disable');
this.disable();
draggable2.enable();

gsap.to(".panel.three",{
x:-calculateVwToPx(90),
duration:0,
});


gsap.to(".panel.two",{
x:-calculateVwToPx(90),

});


}

}

else{


gsap.to(".panel.four",{
x:this.x,
duration:0,
});

if (distanceXend <= -calculateVwToPx(225))
      // Snap to the target if the threshold is met
{

gsap.to(".panel.three",{
x:-calculateVwToPx(270),
});

gsap.to(".panel.four",{
x:-calculateVwToPx(270),
});

console.log('snap');
this.disable();
draggable4.enable();

}


}

},



})[0];
draggable3.disable();









let draggable2= Draggable.create(".panel.two",{


type:"x",
onDrag:function(){



const distanceXend = (this.x)


if (distanceXend >= -calculateVwToPx(90) ) {

gsap.to(".panel.one",{
x:this.x,
duration:0,
});


if (distanceXend >= -calculateVwToPx(30))
      // Snap to the target if the threshold is met
{

console.log('two disable');
this.disable();
draggable1.enable();


gsap.to(".panel.two",{
x:-calculateVwToPx(0),
duration:0,
});


gsap.to(".panel.one",{
x:-calculateVwToPx(0),

});

}

}

else{

gsap.to(".panel.three",{
x:this.x,
duration:0,
});



if (distanceXend <= -calculateVwToPx(145))
      // Snap to the target if the threshold is met
{


gsap.to(".panel.two",{
x:-calculateVwToPx(180),

});

gsap.to(".panel.three",{
x:-calculateVwToPx(180),

});

gsap.to(".panel.four",{
x:-calculateVwToPx(180),
duration:0,
});



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
    

if (distanceXend <= - calculateVwToPx(55) ) {
      // Snap to the target if the threshold is met
console.log("distancexend");


gsap.to(".panel.one",{
x:-calculateVwToPx(90),

});

gsap.to(".panel.two",{
x:-calculateVwToPx(90),

});

gsap.to(".panel.three",{
x:-calculateVwToPx(90),
duration:0,
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







