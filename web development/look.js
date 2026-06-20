// gsap.from("#left",{
//      left: "0%",
//      duration: 1.2,
//      ease: "power4.inout",
//      right: "100%"
// })
// gsap.from("#left",{
//      width: 0,
//      delay: 1,
//      duration: 1,
//      ease: "power4.inout",
//      right: "100%"
// })
gsap.to("#left1",{
     left:"0%",
     width:"100%",
     delay: 1,
     duration: 1,
     ease: "power4.inout",
})
gsap.from("#left1",{
     rotation: -60,
     transform: "scale(6)",
     delay: 1,
     duration: 1,
     ease: "power4.inout",
     stagger : 1
})
gsap.from("#right",{
     right:"0%",
     duration: 1.2,
     delay: 1,
     ease: "power4.inout",
     left: "100%"
})
gsap.from("#left",{
     right:"50%",
     duration: 1,
     delay: 1,
     ease: "power4.inout",
     left: "0%"
})

