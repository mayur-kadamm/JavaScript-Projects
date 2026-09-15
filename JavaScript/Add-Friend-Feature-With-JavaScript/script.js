var add = document.querySelector("#addfriend")
var txt = document.querySelector("h5")
var remove = document.querySelector("#remove")


add.addEventListener("click",function(){
  
    txt.innerHTML = "Friend Added"
    txt.style.color = "green"
})

remove.addEventListener("click", function () {
  txt.innerHTML = "Strenger";
    txt.style.color = "red"
})