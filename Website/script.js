var animation = function () {
     var tl = gsap.timeline();

     tl.from(".pright>img", {
          y: -70,
          // ease: Linear.ease,
          ease: Power2.easeOut,
          duration: 2,
          repeat: -1
     }, "1")


     tl.from(".pright>.circle1", {
          y: 30,
          ease: Linear.ease,
          // ease: Power2.easeOut,
          height: 50,
          duration: 2,
          repeat: -1
     }, "1")

     tl.from(".pright>.circle2", {
          y: 90,
          ease: Linear.ease,
          ease: Power2.easeOut,
          height: 50,
          duration: 2,
          repeat: -1
     }, "1")



     var tl2 = gsap.timeline({
          scrollTrigger: {
               // markers: true,
               trigger: ".part1",
               start: "top 40%",
               opacity: 1,
               end: "top 50%",
               scrub: 4
          }
     });


     tl2.from(".part2>.p2top", {
          scrollTrigger: {
               // markers: true,
               trigger: ".row",
               start: "top 150%",
               end: "top 65%",
               scrub: 4
               // scale: 2, 
               // duration: 1.5
               // markers: true,
          },
          y: "100%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })
     tl2.from(".part2>.p2mid", {
          scrollTrigger: {
               // markers: true,
               trigger: ".p2mid",
               start: "top 65%",
               end: "top 75%",
               scrub: 4
          },
          y: "100%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".p2btop", {
          scrollTrigger: {
               // markers: true,
               trigger: ".p2btop>.row1",
               start: "top 95%",
               end: "top 105%",
               scrub: 4
          },
          y: "100%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".p2bbottom", {
          scrollTrigger: {
               // markers: true,
               trigger: ".p2bbottom>.row2",
               start: "top 95%",
               end: "top 105%",
               scrub: 4
          },
          y: "100%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".p3right", {
          scrollTrigger: {
               // markers: true,
               trigger: ".part3>.p3right",
               start: "top 300%",
               end: "top 105%",
               scrub: 4
          },
          y: "100%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".part5>.plan", {
          scrollTrigger: {
               // markers: true,
               opacity: .5,
               trigger: "#p2",
               start: "top 60%",
               end: "top 100%",
               scrub: 4
          },
          y: "50%",
          opacity: 0,
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".part6>.p6left", {
          scrollTrigger: {
               // markers: true,
               opacity: .5,
               trigger: ".p6left",
               start: "top 60%",
               end: "top 100%",
               scrub: 4
          },
          y: "50%",
          opacity: 0,
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".part6>.p6right", {
          scrollTrigger: {
               // markers: true,
               opacity: .5,
               trigger: ".p6right",
               start: "top 60%",
               end: "top 100%",
               scrub: 4
          },
          y: "50%",
          opacity: 0,
          ease: Expo,
          stagger: 1,
          duration: 1
     })
     tl2.from(".part8>.ima", {
          scrollTrigger: {
               // markers: true,
               opacity: .5,
               trigger: ".part8>.ima",
               start: "top 60%",
               end: "top 100%",
               scrub: 4
          },
          y: "50%",
          opacity: 0,
          ease: Expo,
          stagger: 1,
          duration: 1
     })


}

animation();