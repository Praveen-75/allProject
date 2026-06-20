var nav = function () {
     document.querySelector(".ri-home-heart-line")
          .addEventListener("click", function () {
               document.querySelector("#about").style.display = "none";
               document.querySelector("#student").style.display = "none"
               document.querySelector("#Institutions").style.display = "none"
               document.querySelector("#Academics").style.display = "none"
               document.querySelector("#Admission").style.display = "none"
               document.querySelector("#Quick").style.display = "none"
          })


     document.querySelector(".Admission")
          .addEventListener("click", function () {
               document.querySelector("#Admission").style.display = "flex"
               document.querySelector("#about").style.display = "none";
               document.querySelector("#student").style.display = "none"
               document.querySelector("#Institutions").style.display = "none"
               document.querySelector("#Academics").style.display = "none"
               document.querySelector("#Quick").style.display = "none"
          })


     document.querySelector(".about")
          .addEventListener("click", function () {
               document.querySelector("#about").style.display = "flex"
               document.querySelector("#student").style.display = "none"
               document.querySelector("#Institutions").style.display = "none"
               document.querySelector("#Academics").style.display = "none"
               document.querySelector("#Admission").style.display = "none"
               document.querySelector("#Quick").style.display = "none"
          })


     document.querySelector(".student")
          .addEventListener("click", function () {
               document.querySelector("#student").style.display = "flex"
               document.querySelector("#Institutions").style.display = "none"
               document.querySelector("#Academics").style.display = "none"
               document.querySelector("#about").style.display = "none";
               document.querySelector("#Admission").style.display = "none"
               document.querySelector("#Quick").style.display = "none"
          })

     document.querySelector(".Institutions")
          .addEventListener("click", function () {
               document.querySelector("#Institutions").style.display = "flex"
               document.querySelector("#about").style.display = "none";
               document.querySelector("#student").style.display = "none"
               document.querySelector("#Academics").style.display = "none"
               document.querySelector("#Admission").style.display = "none"
               document.querySelector("#Quick").style.display = "none"
          })

     document.querySelector(".Academics")
          .addEventListener("click", function () {
               document.querySelector("#Academics").style.display = "flex"
               document.querySelector("#about").style.display = "none";
               document.querySelector("#student").style.display = "none"
               document.querySelector("#Institutions").style.display = "none"
               document.querySelector("#Admission").style.display = "none"
               document.querySelector("#Quick").style.display = "none"
          })

     document.querySelector(".Quick")
          .addEventListener("click", function () {
               document.querySelector("#Quick").style.display = "flex"
               document.querySelector("#about").style.display = "none";
               document.querySelector("#Academics").style.display = "none"
               document.querySelector("#student").style.display = "none"
               document.querySelector("#Institutions").style.display = "none"
               document.querySelector("#Admission").style.display = "none"
          })

     document.querySelector(".gola")
          .addEventListener("click", function () {
               document.querySelector(".mobile").style.transform = 'translate(100%)'
          })
     document.querySelector(".ri-menu-3-line")
          .addEventListener("click", function () {
               document.querySelector(".mobile").style.transform = 'translate(-100%)';
          })
}

nav();

var animation = function () {
     var tl = gsap.timeline();

     tl.from("#one , #tow", {
          height: 0,
          ease: Expo.easeInOut,
          duration: 2.5

     })
          .from("#center img", {
               opacity: 0,
               ease: Expo.easeInOut
          }, "-=1")
          .to("#loder", {
               y: -1000,
               duration: 1,
               ease: Expo.easeInOut
          })


     var t1 = gsap.timeline();

     t1.from(".first>.surcle,.first>h3", {
          opacity: 0,
          y: 20,
          delay: .8,
          duration: 1,
          stagger: 1
     })
          .from(".nav2", {
               opacity: 0,
               y: -50,
               // delay : 1,
               stagger: 1,
               // duration : 2
          })
          .from(".photo", {
               opacity: 0,
               y: 100,
               // delay : 1,
               stagger: 1,
               // duration : 2
          })

     var tl2 = gsap.timeline({
          scrollTrigger: {
               // markers: true,
               trigger: ".part2",
               start: "top 45%",
               end: "top 55%",
               scrub: 4
          }
     });
     tl2.from(".epart", {
          x: "400%",
          stagger: 1,
          ease: Expo,
          duration: 1
     })

     tl2.from(".card", {
          scrollTrigger: {
               // markers: true,
               trigger: ".StudentServices",
               start: "top 50%",
               end: "top 60%",
               scrub: 4
          },
          x: "-500%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".propartfirst,#our", {
          scrollTrigger: {
               // markers: true,
               trigger: ".propart1",
               start: "top 55%",
               end: "top 65%",
               scrub: 4
          },
          x: "500%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })
     tl2.from(".propartsecond , #our1", {
          scrollTrigger: {
               // markers: true,
               trigger: ".propart2",
               start: "top 65%",
               end: "top 75%",
               scrub: 4
          },
          x: "-500%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

     tl2.from(".section", {
          scrollTrigger: {
               // markers: true,
               trigger: ".section",
               start: "top 95%",
               end: "top 105%",
               scrub: 4
          },
          y: "100%",
          ease: Expo,
          stagger: 1,
          duration: 1
     })

}

animation();