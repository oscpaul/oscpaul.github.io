    function calculateVwToPx(vwValue) {
        const viewportWidth = window.innerWidth;
        return (viewportWidth * vwValue) / 100;
    }








  


document.addEventListener("DOMContentLoaded", (event) => {

const draggableElement = document.querySelector(".panel.one");
const startX = draggableElement.offsetLeft;
const myDiv = document.getElementById('svgtext2');

    
let mm = gsap.matchMedia();


    /*
Match media
*/


    
mm.add("(max-width: 767px)", () => {
    
});

let draggable4= Draggable.create(".panel.four",{
type:"x",
    inertia:true,

onDrag:function(){
const distanceXend = (this.x)

if (distanceXend >= -calculateVwToPx(300) ) {

gsap.to(".panel.three",{
x:this.x,
duration:0,
});

if (distanceXend >= -calculateVwToPx(240))
      // Snap to the target if the threshold is met
{

console.log('three disable');
this.disable();
draggable3.enable();

gsap.to(".panel.three",{
x:-calculateVwToPx(200),
});

gsap.to(".panel.four",{
x:-calculateVwToPx(200),
duration:0,
});

gsap.to(".flextexts3",{
x:-calculateVwToPx(180),
});
gsap.to(".flextexts4",{
x:-calculateVwToPx(180),
});
    

}

}

else{

if (distanceXend <= -calculateVwToPx(300)) {
      // Snap to the target if the threshold is met
gsap.to(".panel.four",{
x:-calculateVwToPx(300),
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


if (distanceXend >= -calculateVwToPx(150))
      // Snap to the target if the threshold is met
{

console.log('three disable');
this.disable();
draggable2.enable();



gsap.to(".panel.three",{
x:-calculateVwToPx(100),
duration:0,
});

gsap.to(".panel.two",{
x:-calculateVwToPx(100),
});

gsap.to(".flextexts2",{
x:-calculateVwToPx(90),
});
gsap.to(".flextexts3",{
x:-calculateVwToPx(90),
});
gsap.to(".flextexts4",{
x:-calculateVwToPx(90),
});
    
}

}

else{


gsap.to(".panel.four",{
x:this.x,
duration:0,
});

if (distanceXend <= -calculateVwToPx(205))
      // Snap to the target if the threshold is met
{

gsap.to(".panel.three",{
x:-calculateVwToPx(300),
});

gsap.to(".panel.four",{
x:-calculateVwToPx(300),
});

    gsap.to(".flextexts3",{
x:-calculateVwToPx(270),
});
gsap.to(".flextexts4",{
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


if (distanceXend >= -calculateVwToPx(100) ) {

gsap.to(".panel.one",{
x:this.x,
duration:0,
});


if (distanceXend >= -calculateVwToPx(60))
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

gsap.to(".flextexts1",{
x:-calculateVwToPx(0),
});
gsap.to(".flextexts2",{
x:-calculateVwToPx(0),
});
gsap.to(".flextexts3",{
x:-calculateVwToPx(0),
});


}

}

else{

gsap.to(".panel.three",{
x:this.x,
duration:0,
});



if (distanceXend <= -calculateVwToPx(120))
      // Snap to the target if the threshold is met
{


gsap.to(".panel.two",{
x:-calculateVwToPx(200),
});

gsap.to(".panel.three",{
x:-calculateVwToPx(200),
});

gsap.to(".panel.four",{
x:-calculateVwToPx(200),
duration:0,
});
gsap.to(".flextexts2",{
x:-calculateVwToPx(180),
});
gsap.to(".flextexts3",{
x:-calculateVwToPx(180),
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
inertia:true,

onDrag:function(){
  const distanceX = (this.x);
if (distanceX >= 10 ) {
      // Snap to the target if the threshold is met
console.log("distance");
gsap.to(".panel.one",{
x:0,
duration:0,
});

gsap.to(".panel.two",{
x:0,
});


    } else {
      // Snap back to the original position if not
    }



    const distanceXend = (this.x)
    

if (distanceXend <= - calculateVwToPx(25) ) {
      // Snap to the target if the threshold is met


gsap.to(".panel.one",{
x:-calculateVwToPx(100),
});

gsap.to(".panel.two",{
x:-calculateVwToPx(100),
});

gsap.to(".panel.three",{
x:-calculateVwToPx(100),
duration:0,
});

gsap.to(".flextexts1",{
x:-calculateVwToPx(90),
});
gsap.to(".flextexts2",{
x:-calculateVwToPx(90),
});
gsap.to(".flextexts3",{
x:-calculateVwToPx(90),
});
draggable1.disable();
draggable2.enable();
         


    } else {

gsap.to(".panel.one",{
x:-calculateVwToPx(0),
    duration:2,
});

    
      // Snap back to the original position if not
    }
    


},
 onDragEnd: function() {

  }
})[0];



    const _myDiv_ = document.getElementById('flextexts2');
  _myDiv_.addEventListener('click', function() {
      gsap.to(".panel.one",{
x:-calculateVwToPx(100),
});

gsap.to(".panel.two",{
x:-calculateVwToPx(100),
});

gsap.to(".panel.three",{
x:-calculateVwToPx(100),
duration:0,
});

gsap.to(".flextexts1",{
x:-calculateVwToPx(90),
});
gsap.to(".flextexts2",{
x:-calculateVwToPx(90),
});
gsap.to(".flextexts3",{
x:-calculateVwToPx(90),
});
    
draggable1.disable();
draggable2.enable();
        console.log('Div with ID "myDivId" was clicked!');
    });
    const myDiv_ = document.getElementById('flextexts3');
  myDiv_.addEventListener('click', function() {
        // Code to execute when the div is clicked
        console.log('Div with ID "myDivId" was clicked!');
    });
        const myDiv__ = document.getElementById('flextexts4');
      myDiv__.addEventListener('click', function() {
        // Code to execute when the div is clicked
        console.log('Div with ID "myDivId" was clicked!');
    });


    
});

function turnRight1()
      {


      }
  

    



































