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
    inertia:true,

onDrag:function(){
const distanceXend = (this.x)

if (distanceXend >= -calculateVwToPx(270) ) {

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
x:-calculateVwToPx(180),

});


gsap.to(".panel.four",{
x:-calculateVwToPx(180),
duration:0,
});

    
}


}

else{

if (distanceXend <= -calculateVwToPx(270)) {
      // Snap to the target if the threshold is met
gsap.to(".panel.four",{
x:-calculateVwToPx(270),
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

if (distanceXend <= -calculateVwToPx(205))
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


if (distanceXend >= -calculateVwToPx(60))
      // Snap to the target if the threshold is met
{

console.log('two disable');
this.disable();
draggable1.enable();

var player = videojs('my-video'); // 'myVideoId' is the ID of your video element
  player.reset();
     player.src({ src: 'mp41.mp4' });
   player.play();


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



if (distanceXend <= -calculateVwToPx(120))
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


 let draggabletext4= Draggable.create(".flextext4",{
type:"x",
onDrag:function(){
const distanceXend = (this.x)
if (distanceXend >= -calculateVwToPx(270) ) {

gsap.to(".flextext3",{
x:this.x,
duration:0,
});

if (distanceXend >= -calculateVwToPx(240))
      // Snap to the target if the threshold is met
{

console.log('three disable');
this.disable();
draggabletext3.enable();




gsap.to(".flextext3",{
x:-calculateVwToPx(180),

});


gsap.to(".flextext4",{
x:-calculateVwToPx(180),
duration:0,
});

    
}


}
else{}
},
})[0];
draggabletext4.disable();

let draggabletext3= Draggable.create(".flextext3",{
type:"x",

onDrag:function(){
const distanceXend = (this.x)


if (distanceXend >= -calculateVwToPx(180) ) {

gsap.to(".flextext2",{
x:this.x,
duration:0,
});


if (distanceXend >= -calculateVwToPx(150))
      // Snap to the target if the threshold is met
{

console.log('three disable');
this.disable();
draggabletext2.enable();



gsap.to(".flextext3",{
x:-calculateVwToPx(90),
duration:0,
});

gsap.to(".flextext4",{
x:-calculateVwToPx(90),
duration:0,
});

gsap.to(".flextext2",{
x:-calculateVwToPx(90),

});

 
}

}

else
{

if (distanceXend <= -calculateVwToPx(205))
      // Snap to the target if the threshold is met
{

gsap.to(".flextext3",{
x:-calculateVwToPx(270),


});

gsap.to(".flextext4",{
x:-calculateVwToPx(270),

});


gsap.to(".flextext4",{
x:this.x,
duration:0,
});

console.log('snap');
this.disable();
draggabletext4.enable();




gsap.to(".flextext3",{
x:-calculateVwToPx(90),
duration:0,
});


}


}



},
})[0];
draggable3.disable();

let draggabletext2= Draggable.create(".flextext2",{
type:"x",
onDrag:function(){
const distanceXend = (this.x)
if (distanceXend >= -calculateVwToPx(90) ) {
gsap.to(".draggabletext1",{
x:this.x,
duration:0,
});

if (distanceXend >= -calculateVwToPx(60))
      // Snap to the target if the threshold is met
{
console.log('two disable');
this.disable();
draggabletext1.enable();
gsap.to(".flextext2",{
x:-calculateVwToPx(0),
duration:0,
});

gsap.to(".flextext3",{
x:-calculateVwToPx(0),
});

gsap.to(".flextext1",{
x:-calculateVwToPx(0),

});

}

}

else{


if (distanceXend <= -calculateVwToPx(120))
      // Snap to the target if the threshold is met
{


gsap.to(".flextext2",{
x:-calculateVwToPx(180),
});
gsap.to(".flextext3",{
x:-calculateVwToPx(180),
});
gsap.to(".flextext4",{
x:-calculateVwToPx(180),
duration:0,
});
this.disable();
draggabletext3.enable();
}
}











},
})[0];
draggabletext2.disable();
let draggabletext1= Draggable.create(".flextext1",{
type:"x",
onDrag:function(){
console.log('ok');
  const distanceX = (this.x);
if (distanceX <= - calculateVwToPx(25) ) {
gsap.to(".svgtext2",{
x:this.x,
duration:0,
});
gsap.to(".flextext1",{
x:-calculateVwToPx(90),
});
gsap.to(".flextext2",{
x:-calculateVwToPx(90),
});
gsap.to(".flextext3",{
x:-calculateVwToPx(90),
});
this.disable();
draggabletext2.enable();

    } else {
      // Snap back to the original position if not
    }
    

},
})[0];


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

