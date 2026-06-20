function getUserInput() {
     var inputValue = document
          .querySelector(".userinput").value;
     return inputValue;
}

document.querySelector(".searchBtn").addEventListener("click", function () {
     var inputValue = document
          .querySelector(".userinput").value;
     var userInput = getUserInput();
     searchGiphy(userInput);
});


document.querySelector(".userinput")
     .addEventListener("keyup", function (e) {

          if (e.which === 13) {
               var userInput = getUserInput();
               searchGiphy(userInput);
          }
     });

function searchGiphy(searchQuery) {
     var url =
          "https://api.giphy.com/v1/gifs/search?api_key=1jIiow5KZz3fxV0X3F4hfCJm9sobXPsj&q=" + searchQuery;

     //1jIiow5KZz3fxV0X3F4hfCJm9sobXPsj

     // GlVGYHkr3WSBnllca54iNt0yFbjz7L65


     var GiphyAJAXCall = new XMLHttpRequest();
     GiphyAJAXCall.open("GET", url);
     GiphyAJAXCall.send();

     GiphyAJAXCall.addEventListener("load", function (data) {
          var actualData = data.target.response;
          pushToDOM(actualData);
          console.log(actualData);

     });
}


function pushToDOM(response) {
     response = JSON.parse(response);

     var images = response.data;

     var container = document.querySelector(".gif-results");

     container.innerHTML = "";

     images.forEach(function (image) {

          var src = image.images.fixed_height.url;

          container.innerHTML += "<img src='"
               + src + "' class='gif gif__image' />";
     });
}



function myFunc() {
     setTimeout(function () {
          $('.result').fadeOut('fast');
     }, 1000);
}
myFunc();



document.querySelector("#menu")
     .addEventListener("click", function () {
          document.querySelector(".main").style.display = "none";
          document.querySelector(".login").style.opacity = "1";
     })

     document.querySelector(".ri-close-circle-line")
     .addEventListener("click", function () {
          document.querySelector(".main").style.display = "flex";
          document.querySelector(".login").style.opacity = "0";
     })