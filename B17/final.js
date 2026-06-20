// 
// var tl = gsap.timeline();
//      tl.from("#gola",{
//      stagger : .1,
//      filter : "blur(2px)",
//      scale : 1.5,
//      duration : 1.5,
//      color : "red",
//      opacity : 0,
//      ease : Expo,
//      x : 600
// },)


// document.querySelectorAll("#part1")
//      .forEach(function(elem){
//         elem.addEventListener("mousemove", function(dets){
//           elem.lastElementChild.backgroundColor = "red"
//           elem.lastElementChild.style.opacity = 1;
//           elem.lastElementChild.style.left = (dets.screenX)*.9 + "px";
//           // elem.lastElementChild.style.transform = `rotate(${dets.screenX*.05}deg) scale(${0.9 + dets.screenX* .001})`     
//         })
//         elem.addEventListener("mouseout",function(){
//           // elem.lastElementChild.style.opacity = 0;
//         })
//      })


     // document.querySelector("#part1")
     // .addEventListener("mousemove", function(){
     //      // .addEventListener("click", function(){
     //      document.querySelector("#part1").style.backgroundColor = "red"

     // })


     var arr = [
          {color:"red"},
          {color:"blue"},
          {color:"green"},
          {color:"yellow"},
          {color:"white"}
     ]
     
     
    //  document.querySelectorAll("#main")
    //  .forEach(function(elem){
    //     elem.addEventListener("mousemove", function(dets){
    //       // elem.lastElementChild.style.backgroundColor = "red";
    //       // elem.lastElementChild.style.left = (dets.screenX)*.9 + "px";
    //     })
    //     elem.addEventListener("mouseout",function(){
    //       // elem.lastElementChild.style.opacity = 0;
    //     })
    //  })
     document.querySelectorAll("#main")
     .forEach(function(elem){
        elem.addEventListener("mousemove", function(dets){
          elem.lastElementChild.style.backgroundColor = "green";
          elem.lastElementChild.style.color = "#fff";
          // elem.lastElementChild.style.left = (dets.screenX)*.109 + "px";
        })
        elem.addEventListener("mouseout",function(){
          // elem.lastElementChild.style.opacity = 0;
        })
     })
     
     
