
var swiper = new Swiper(".mySwiper", {
     slidesPerView: 2,
     spaceBetween: 30,
     navigation: {
          nextEl: "#slideright2",
          prevEl: "#sliderleft2",
     },
     preventInteractionOnTransition: true,
     loop: true,
     autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
     },
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     breakpoints: {
          // when window width is >= 320px
          320: {
               slidesPerView: 1,
               spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
               slidesPerView: 1,
               spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
               slidesPerView: 1,
               spaceBetween: 40
          },
          700: {
               slidesPerView: 2,
               spaceBetween: 40
          }
     }
});


// const body = document.body;
// const main = document.getElementById('main');

// let sx = 0, // For scroll positions
//     sy = 0;
// let dx = sx, // For container positions
//     dy = sy;


// body.style.height = main.clientHeight + 'px';


// main.style.position = 'fixed';
// main.style.top = 0;
// main.style.left = 0;

// // Bind a scroll function
// window.addEventListener('scroll', easeScroll);


// function easeScroll() {

//   sx = window.pageXOffset;
//   sy = window.pageYOffset;
// }


// window.requestAnimationFrame(render);

// function render(){
//   //We calculate our container position by linear interpolation method
//   dx = li(dx,sx,0.07);
//   dy = li(dy,sy,0.07);

//   dx = Math.floor(dx * 100) / 100;
//   dy = Math.floor(dy * 100) / 100;


//   main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;



//   window.requestAnimationFrame(render);
// }

// function li(a, b, n) {
//   return (1 - n) * a + n * b;
// }




// document.getElementById("audiocat").play();

// document.querySelector("#codebite-pop-up").addEventListener("click",function(){
//     document.querySelector("#codebite-pop-up").style.display = "none"
// })


document.fonts.ready.then(function (dets) {
     document.querySelector("#loader").style.display = "none";
})

const scroller = new LocomotiveScroll({
     el: document.querySelector("#main"),
     smooth: true
});


window.addEventListener("resize", function (event) {
     scroller.update();
     console.log("resize");
     scroller.start();
     document.querySelector("#final-last").style.marginBottom = "0vh";
     document.querySelector("#final-last").style.paddingBottom = "5vh";
});


window.addEventListener("load", function (event) {
     scroller.update();
     console.log("loaded");
     scroller.start();
     document.querySelector("#final-last").style.marginBottom = "0vh";
     document.querySelector("#final-last").style.paddingBottom = "5vh";
});


scroller.on("load", function () {
     scroller.update();
     scroller.start();
     console.log("loaded");
})
scroller.on("resize", function () {
     scroller.update();
     scroller.start();
     console.log("resized");
})


document.addEventListener("DOMContentLoaded", function (event) {
     var scrollpos001 = localStorage.getItem('scrollpos001');
     if (scrollpos001.split('px')[0] > 10) {
          scroller.scrollTo(0, scrollpos001);
     }
});


scroller.on("scroll", function (dets) {
     localStorage.setItem('scrollpos001', dets.scroll.y + "px");
})
var flags = 0;
scroller.on("scroll", function (dets) {
     var scrollpos001 = localStorage.getItem('scrollpos001');
     if (scrollpos001.split('.')[0] > 50) {
          flags = 1;
     }
     if (scrollpos001.split('.')[0] < 50) {
          flags = 0;
     }
     else {
          document.querySelector("#nav-main").style.backgroundColor = "transparent";
     }
     if (flags === 1) {
          document.querySelector("#nav-main").style.background = "white";
     }
     if (flags === 0) {
          document.querySelector("#nav-main").style.backgroundColor = "transparent";
     }
})



// function show() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();

// }
// show()
// document.querySelector("button")
//     .addEventListener("click", function () {
//         document.querySelector("#sidemenu").style.left = 0;
//         document.querySelector("#main").style.transform = "rotateY(-10deg) scale(.9)";
//         document.querySelector("#main").style.filter = "blur(1px)";
//     });



var datateachers = [
     { img: "https://ik.imagekit.io/sheryians/1_5lCyqI3u1.png", firstname: "Dhanesh", secondname: "Malviya", color: "#D6EFF6", teacher: "Python & Full Stack ", new: false, taught: "1000+ Students" },
     { img: "https://ik.imagekit.io/sheryians/2_syW2gfMjS.png", firstname: "Adarsh", secondname: "Gupta", color: "#a7d79a", teacher: "Java & DSA", new: false, taught: "1500+ Students" },
     { img: "https://ik.imagekit.io/sheryians/3_-Jysh0bCc.png", firstname: "Harsh", secondname: "Sharma", color: "#6a7f8d", teacher: "Full Stack Web & C Lang", new: false, taught: "2000+ Students" },
     { img: "https://ik.imagekit.io/sheryians/project_20220729_1711234-01_AqKEbRv65.png", firstname: "Sarthak", secondname: "Sharma", color: "#87c8db", teacher: "Front-end & UI/UX design", new: true, pos: "6" },
     { img: "https://ik.imagekit.io/sheryians/5_QLQtuwRVu.png", firstname: "Harsh", secondname: "Patel", color: "#d96861", teacher: "Back-end & C lang", new: true },
     { img: "https://ik.imagekit.io/sheryians/4_SvKl0y0Y7.png", firstname: "Akarsh", secondname: "Vyas", color: "#D8BB99", teacher: "Aptitude & Reasoning", new: true, pos: "4" },
     { img: "https://ik.imagekit.io/sheryians/KATIL_ALI_BHAI_mRG908Kb1B.png", firstname: "Mohd. Ali", secondname: "Ansari", color: "#d39c77", teacher: "Java & SQL", new: true }
];


// function initmostpopcourse() {
//      var scrollAmount = 0;
//      var scrollMin = 0
//      var scrollMax = document.querySelector(".mpseries").clie…
// }