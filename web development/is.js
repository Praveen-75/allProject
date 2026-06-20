// var uname = prompt("age ? ");
// var age = prompt(" name ? ");
// console.log(uname,age);
// var a = prompt("name1 ")
// var b = prompt("name2 ")
// if(a==b){
//     console.log("Equal")
// } else{
//     console.log("Not ")
// }
// var a = prompt("11");
// var b = prompt("11")
// ++a;
// console.log(++a);
// var a = Number(11) ;
// var b = Number(11);
// console.log(a*b);
// var a = prompt("password ? ");
// var b = prompt("password ? ");
// if(a===b){ 
          // console.log("Login");
// }else{ 
          // console.log("Login again");
// }

// var a = [1,2,3,4,5];
// var b = a;
// var c = b;
// c.pop();
// b.pop();
// a.pop();


// var abcd = [1,2,3,4,5];
// var defg = [...abcd];
// var fghi = abcd;
// var ghij = fghi;
// var ooo = ghij.pop();
 

// var a = prompt("name1");
// var b = prompt("name2");
// var c = prompt("name3");
// if(a.charAt(0)===b.charAt(0)&&a.charAt(0)===c.charAt(0)){
//           console.log("Equal");
// }else{
//           console.log("Not");
// }

// console.log("bhai");

// for(var i=0; i<10; i++){
//      if(i==5){}
//      else{
//    console.log(i); 
//      } 
// }



// for(var i=0; i<25; i++){
//      var count = 0;
//      count++;
//      console.log(count);
// }


// var nam = prompt("age ");
// console.log(Number(nam)+2);

// var num = prompt("Number");
// var con = Number(num);
// var redu = Math.floor(con/10);
// console.log(redu%10);


// var age = prompt("age");
// var nam = prompt("name");
// console.log(nam.charAt(age%10-1));

// alert("hi")

// var arr = [1,2,3,4,5];
// arr.forEach(function(data) {
//   console.log(data);   
// });

// function
// function statement
// function expression
// anons function

// fat arrow function
// fat arrow function with one param
// fat arrow function with implicit return

// var a = () => 12*5;
// console.log(a());

//  var a = function(){
//       return 12*6;
//  };
//  console.log(a());


// var score = 0;
// function decKaro(){
//      score--;
// }
// function incKaro(){
//      score++;
// }
// function printKaro(){
//      if(score>0){
//           console.log(score);
//      }else{
//           console.log("0");
//      }
// }
// for(var i=0; i<5; i++){
//      var score = prompt("Enter Number");
//      if(score>5){
//           incKaro();
//      }else{
//           decKaro();
//      }
// }
// printKaro(score)


// function bubbleCrator(){
//      for(var i=0; i<50; i++){
//           const bubbles = document.querySelector('#bubbles');
//           console.log(Math.floor(Math.random(bubbles)*10));
//      }
// }
// bubbleCrator();

// var h1 = document.querySelector('h1').addEventListener("click", function(){
//    document.querySelector('h1').style.color="red"
// })
// var on = document.querySelector('#on');
// var off = document.querySelector('#off');
// on.addEventListener("click", function(){
//      document.querySelector('#circle').style.backgroundColor = "red";

// })
// off.addEventListener("click", function(){
//      off.addEventListener("click",function(){
//           document.querySelector("#circle").style.backgroundColor ="black";
//      })
// })


// var ans = prompt("Exit");
// if(ans!==Exit){
     
// }


// document.querySelector("span")
// .addEventListener("click",function(){
//      document.querySelector(".circle").style.top = "-50%";
// })
// document.querySelector("#off")
//  .addEventListener("click",function(){
//       document.querySelector(".circle").style.top = "50%"
//  })
 
//  document.querySelector("#left")
//  .addEventListener("click",function(){
//       document.querySelector(".circle").style.left = "10%"
//  })




// function abcd (){
//      console.log(this);
// }
// var obj = {
//      name : "Praveen"
// }
// abcd.call(obj)




// function abcd (){
//      console.log(this);
// }
// var obj = {
//      name : "Praveen",
//      age : 12
// }
// var newfun = abcd.bind(obj);
// newfun();



// function createHuman(name,age){
//      this.name = name;
//      this.age = age;
//      this.sayName = function(){
//           console.log("Hello");
//      }
// }
// var human = new createHuman("Praveen",19)



// function createHuman(name,age){
//      this.name = name;
//      this.age = age;
// }
// createHuman.prototype.sayName = function(){
//      console.log("Hello")
// }
// var human = new createHuman("Praveen",19)






























document.querySelector("#on")
.addEventListener("click",function(){
     var red = Math.floor(Math.random()*255);
     var green = Math.floor(Math.random()*255);
     var blue = Math.floor(Math.random()*255);
     document.querySelector(".circle").style.backgroundColor = `rgb(${red},${green},${blue})`
});

var valuev = 0;
var valueh = 0;
window.addEventListener("keydown",function(kuchbhi){
     console.log(kuchbhi);
     if(kuchbhi.keyCode===37){
          valueh = valueh - 20;
          let initial = 50 + valueh;
          let final = `${initial}%`;
          console.log(final);
          document.querySelector(".circle").style.left = final;
     }else if(kuchbhi.keyCode===39){
          valueh = valueh + 20;
          let initial = 50 + valueh;
          let final = `${initial}%`;
          console.log(final);
          document.querySelector(".circle").style.left = final;
     } 
     
     
     
      else if(kuchbhi.keyCode===38){
          valuev = valuev - 20;
          let initial = 50 + valuev;
          let final = `${initial}%`;
          console.log(final);
          document.querySelector(".circle").style.top = final;
     }else if(kuchbhi.keyCode===40){
          valuev = valuev + 20;
          let initial = 50 + valuev;
          let final = `${initial}%`;
          console.log(final);
          document.querySelector(".circle").style.top = final;
     }

});
 






