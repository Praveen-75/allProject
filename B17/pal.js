let add = document.getElementById("add");
let list = document.getElementById("list");
let clear = document.getElementById("clear");

document.querySelectorAll("#frm").forEach(function (elem) {
     add.addEventListener("click", function () {
          var paragraph = document.createElement("p")
          console.log(elem.value)
          paragraph.innerText = elem.value;
          list.appendChild(paragraph);
          elem.value = "";
          clear.addEventListener("click", function () {
               list.removeChild(paragraph)
          })
     })
})
