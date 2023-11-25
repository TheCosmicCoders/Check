Shery.imageEffect(".gooey", {
    style: 5, 
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.53,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.68},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.19,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
    ,
    gooey:true,
  });

  Shery.mouseFollower({
    skew: true,
  }

  );

  Shery.makeMagnet(".btn , a , .logo , h1 , p , h2 , .btn- , video" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 5,
  });
  Shery.textAnimate(" .open-menu a " /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 2,
  });


var menu = document.querySelector(".menu-bhai");
var opm = document.querySelector(".open-menu");
var close = document.querySelector(".open-menu img");
var tl = gsap.timeline();
menu.addEventListener("click" , function(){
    // opm.classList.toggle("active");
    opm.style. opacity = "1";
    opm.style. height = "100%";
    opm.style. width = "90%";
   
});
close.addEventListener("click", function(){
  opm.style. opacity = "0";
  opm.style. height = "0";
  opm.style. width = "0";
})
tl.from(".topbar" , {
  opacity:0,
  y:-200,
  duration:1
})
tl.from("nav" ,{
  opacity:0,
  y:-50,
  duration:1
})
tl.from(".main-line h1 , .btn",{
  opacity:0,
y:-200,
duration:2
});
tl.from(".gooey",{
  opacity:0,
duration:2,
scrollTrigger:{
  trigger: ".page-2",
  start: "top 30%",
  x:-200,
  end: "top 100px",
  scrub: true
 
}
});
tl.from(".page-2 , .page-3" ,{
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger: ".page-2",
    start: "top 60%",
  
    end: "top 100px",
    scrub: true,
   
  }
})
tl.from(".business-list div " ,{
  opacity:0,
  duration:2,
  y:600,
  scrollTrigger:{
    trigger: ".page-2",
    start: "top 60%",
  
    end: "top 100px",
    scrub: true,
   
  }
});



