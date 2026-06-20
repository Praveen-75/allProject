var arr = [
     {name: "Praveen" , desc: "An Instagram bio is the small area under your username where you can share some details about yourself or your brand. Your Instagram bio can include a brief self or brand description, contact information, emojis, hashtags and more.", stetus:"friend" },
     {name: "Kratika" , desc: "“All your friends are so cool, you go out every night”— Olivia Rodrigo. Who is pretty cool herself: this short, informative and rhyming bio says it all.", stetus:"friend" },
     {name: "Soham" , desc: "A clever Instagram bio will score a chuckle (and hopefully a follow) from users. Stay self aware and lighthearted, and the cleverness will come. Old Spice’s bio is a play on the bizarre masculinity that’s present in men’s deodorant branding.", stetus:"friend" },
     {name: "Ranu" , desc: "Emojis are like cheating (the good kind). When words fail, emojis are there. Designers Josh and Matt describe their relationship, career, home base and pets all in a single line of emojis.", stetus:"Dost" }

];

document.querySelector("#main")
.addEventListener("click",function(dets){
     arr[dets.target.id].stetus ="strangers";
     showCards();
});



function showCards(){
var kuch = "";
arr.forEach(function(data,index){
     kuch += `<div id="cards">
     <h2>${data.name}</h2>
     <p>${data.desc}</p>
     <h3 id="stetus">${data.stetus}</h3> 
     <button id ="${index}">${data.stetus === "friend" ? "remove" : "add"}</button>
 </div>`
});
document.querySelector("#main")
.innerHTML = kuch;
}
showCards();




