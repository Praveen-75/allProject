function convertMainScreenTxetToChars() {
     document.querySelectorAll("#text h1")
          .forEach(function (h1) {
               var clutter = "";
               h1.textContent.split("")
                    .forEach(function (charc) {
                         clutter += `<span>${charc}</span>`;
                    })
               h1.innerHTML = clutter;
          })
}


function gsapFirst() {
     var tl = gsap.timeline();
     tl.from("#text h1 span", {
          stagger: .1,
          filter: "blur(2px)",
          scale: 1.5,
          duration: 1.5,
          color: "red",
          opacity: 0,
          ease: Expo
     },)
          .from(".navpart a", {
               stagger: .1,
               duration: 2,
               y: 20,
               opacity: 0,
               ease: Expo
          }, "-=2")
          .from("#ncenter a", {
               duration: 2,
               y: 20,
               opacity: 0,
               ease: Expo
          }, "-=2")
          .from("#circlemain", {
               duration: 2,
               scale: 1.5,
               filter: "blur(1px)",
               ease: Expo
          }, "-=2")
          .from("#nbottom", {
               duration: 2,
               opacity: 0,
               y: 20,
               stagger: .2,
               ease: Expo
          }, "-=2")
          .from("#nsaid ", {
               duration: 2,
               opacity: 0,
               rotate: "270deg",
               ease: Expo,
               color: "red"
          }, "-=2")
}


function gsapSecond() {
     var tl2 = gsap.timeline({
          scrollTrigger: {
               // markers : true,
               trigger: "#second",
               start: "top 50%",
               scrub: 4
          }
     });
     tl2.from("#photoseries", {
          x: "100%",
          ease: Expo,
          duration: 1
     }, "photo")

          .to("#second h1", {
               x: "-100%",
               ease: Expo,
               duration: 1
          }, "photo")
}


function gsapThird() {
     document.querySelector("#third").addEventListener("click", function (dets) {
          // console.log(dets.target.children[0])
          if (isNaN(Number(dets.target.id))) {
               // var elem = document.querySelector(".strcnt" + dets.target.id.split("")[1]);
               var elem = ".strcnt" + dets.target.id.split("")[1];
               console.log(elem)
               gsap.to(elem, {
                    opacity: 0,
                    ease: Expo.easeInOut,
                    duration: 1.5,
               })
               gsap.to(dets.target, {
                    opacity: 0
               })
               gsap.to(dets.target, {
                    opacity: 0
               })
               gsap.to(dets.target.offsetParent, {
                    width: "4%",
                    ease: Expo.easeInOut,
                    duration: 2,
               })
          }
          else {
               let dec = 100 - (4 - dets.target.id) * 4;
               // console.log(4-dets.target.id)*4;
               var elem = document.querySelector(".strcnt" + dets.target.id);
               // console.log(elem)
               gsap.to(dets.target, {
                    width: dec + "%",
                    duration: 2,
                    ease: Expo.easeInOut
               })
               gsap.to(elem, {
                    opacity: 1,
                    ease: Expo.easeInOut,
                    duration: 1.5,
                    delay: 1
               })
          }

     });
}


function gsapFourth() {
     document.querySelectorAll(".elem")
          .forEach(function (elem) {
               elem.addEventListener("mousemove", function (dets) {
                    elem.lastElementChild.style.opacity = 1;
                    elem.lastElementChild.style.left = (dets.screenX) * .9 + "px";
                    elem.lastElementChild.style.transform = `rotate(${dets.screenX * .05}deg) scale(${0.9 + dets.screenX * .001})`
               })
               elem.addEventListener("mouseout", function () {
                    elem.lastElementChild.style.opacity = 0;
               })
          })
}


convertMainScreenTxetToChars();
gsapFirst();
gsapSecond();
gsapThird();
gsapFourth();