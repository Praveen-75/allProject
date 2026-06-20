var arr = [
     { pic1: "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387", Name: "Praveen Rajput", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1624083685850-e32f4f9ecff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", Name: "Kratika Rajput", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1504696326151-f4a2ff958ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", Name: "Soham Rajput", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80", Name: "Ranu Rajput", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1432105117111-b8c5bed69654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80", Name: "Durga Rajput", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1480623826718-27e89ac63a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Name: "Vivek Rajput", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", Name: "Sandeep Yadav", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1455541029258-597a69778eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1496523720220-b62e33cf3161?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332", Name: "Priya", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80", Name: "Saytam", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1441014023725-517f53f8ed61?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170", Name: "Nitesh Yadav", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", Name: "Kanhaiya", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1527490272553-ba05e1f11ee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80", stetus: "Follow" },
     { pic1: "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387", stetus: "Follow" }
];

var arr1 = [
     { reel: "video/video1.mp4" },
     { reel: "video/video2.mp4" },
     { reel: "video/video3.mp4" },
     { reel: "video/video4.mp4" },
     { reel: "video/video6.mp4" },
     { reel: "video/video7.mp4" }
]

var reel12 = ""
arr1.forEach(function (rel, index) {
     reel12 += `<div id="reel1">
                     <div id="like1">
                         <h1>Reels</h1>
                         <i class="ri-camera-line"></i>
                    </div>
                    <video id ="${index}" src="${rel.reel}"controls></video>
                    <div id="like">
                         <i class="ri-heart-line"></i>
                         <i class="ri-chat-1-line"></i>
                         <i class="ri-send-plane-fill"></i>
                    </div>
              </div>`
})
document.querySelector("#reel").innerHTML = reel12;

function show() {
     var clutter = "";
     arr.forEach(function (elem, index) {
          clutter += `
     <div id="story">
          <div id="chhoti">
               <img id ="${index}" src="${elem.pic1}" alt="">
          </div>
     </div>`
     })
     document.querySelector("#stories")
          .innerHTML = clutter;
}
show();


document.querySelector("#stories")
     .addEventListener("click", function (dets) {
          document.querySelector("#pic img")
               .setAttribute("src", arr[dets.target.id].pic1)
          document.querySelector("#overlay")
               .style.display = "flex"

          document.querySelector("#modal")
               .style.display = "none"

          setTimeout(function () {
               document.querySelector("#overlay")
                    .style.display = "none";

               document.querySelector("#modal")
                    .style.display = "flex"
          }, 3000)


          var grow = 0;
          var ghadi = setInterval(function () {
               if (grow < 100) {
                    grow++;
                    document.querySelector("#growth").style.width = grow + "%";
               } else {
                    grow = 0;
                    document.querySelector("#growth").style.width = grow + "%";
                    clearInterval(ghadi);
               }
          }, 30)

     });


function show1() {
     var modal = "";
     arr.forEach(function (elem1, index) {
          modal += `<div id="modal1">
                         <div id="modal2">
                              <img src="${elem1.pic1}" alt="">
                              <h4>${elem1.Name}</h4><br>
                              <h6>New to Instagram</h6>
                         </div>
                         <button id="${index}"><h5>${elem1.stetus}</h5></button>
                    </div>`

     })
     document.querySelector("#modal").innerHTML = modal;
}
show1()


document.querySelector("#modal")
     .addEventListener("click", function (dets) {
          arr[dets.target.id].stetus = "Following";
          show1();
     });


document.querySelector("#reell")
     .addEventListener("click", function () {
          document.querySelector("#reel").style.display = "flex"
          document.querySelector("#over")
               .style.display = "none"
          document.querySelector("#over1").style.display = "none"
          document.querySelector("#over2").style.display = "none"
          document.querySelector("#overlay")
               .style.display = "none"
          document.querySelector("#insta").style.display = "none"
          document.querySelector("#post").style.display = "none"
          document.querySelector("#stories").style.display = "none"
          document.querySelector("#modal").style.display = "none"
          document.querySelector(".post").style.display = "none"
          document.querySelector("#sear").style.display = "none"
     })


document.querySelector("#dil")
     .addEventListener("click", function () {
          document.querySelector("#over")
               .style.display = "flex"
          document.querySelector("#reel").style.display = "none"
          document.querySelector("#over1").style.display = "none"
          document.querySelector("#over2").style.display = "none"
          document.querySelector("#overlay")
               .style.display = "none"
          document.querySelector("#insta").style.display = "none"
          document.querySelector("#in").style.display = "none"
          document.querySelector("#stories").style.display = "none"
          document.querySelector(".post").style.display = "none"
          document.querySelector("#modal").style.display = "none"
          document.querySelector("#sear").style.display = "none"
     })

document.querySelector("#search")
     .addEventListener("click", function () {
          document.querySelector("#over1")
               .style.display = "flex"
          document.querySelector("#sear")
               .style.display = "flex"
          document.querySelector("#reel").style.display = "none"
          document.querySelector(".post").style.display = "none"
          document.querySelector("#post").style.display = "none"

     })

document.querySelector("#search")
     .addEventListener("click", function () {
          document.querySelector("#over2")
               .style.display = "flex"
          document.querySelector("#insta").style.display = "none"
     })

document.querySelector("#box")
     .addEventListener("click", function () {
          document.querySelector("#post")
               .style.display = "flex"

     })


document.querySelector("#home")
     .addEventListener("click", function () {
          document.querySelector("#insta").style.display = "flex"
          document.querySelector("#stories").style.display = "flex"
          document.querySelector(".post").style.display = "flex"
          document.querySelector("#modal").style.display = "flex"
          document.querySelector("#sear")
               .style.display = "none"
          document.querySelector("#over1")
               .style.display = "none"
          document.querySelector("#over2")
               .style.display = "none"
          document.querySelector("#post")
               .style.display = "none"
          document.querySelector("#over")
               .style.display = "none"
          document.querySelector("#reel").style.display = "none"
     })



document.querySelector("#open1")
     .addEventListener("click", function () {
          document.querySelector("#open1 img").style.display = "none"
          document.querySelector("#open").style.display = "none"
          document.querySelector("#stories").style.display = "flex"
          document.querySelector(".post").style.display = "flex"
     })


var clutte = "";
arr.forEach(function (elem, index) {
     clutte += `
               <div id="chat1">
                    <div id="chat12">
                         <img id ="${index}" src="${elem.pic1}" alt="">
                    </div>
                    <div id="chatmid">
                         <h4>${elem.Name}</h4><br>
                    </div>
                    <div id="chatright"><i class="ri-camera-line"></i></div>
                    </div>
               </div>
         `
})
document.querySelector("#chat")
     .innerHTML = clutte;


document.querySelector("#chet")
     .addEventListener("click", function () {
          document.querySelector("#chat")
               .style.display = "inline"
          document.querySelector("#stories").style.display = "none"
          document.querySelector(".post").style.display = "none"
          document.querySelector("#modal").style.display = "none"
          document.querySelector("#insta").style.display = "none"
          document.querySelector("#in").style.display = "none"

     })


gsap.from("#open1", {
     y: -50,
     rotate: "360deg",
     // ease : Bounce.easeIn,
     ease: Expo.easeInOut,
     stagger: .5,
     duration: 1.6,
     delay: 1
})
gsap.from("#rotate", {
     y: -100,
     // rotate : "270deg",
     ease: Bounce.easeIn,
     duration: 3,
     opacity: 0,
     stagger: 1,
     // delay : 1.5
})
