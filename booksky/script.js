

var popoverlay=document.querySelector(".popupoverlay")
var popupbox =document.querySelector(".popupbox")
var addpopupbtn = document.getElementById("add-popup-button")

addpopupbtn.addEventListener("click",function(){
popoverlay.style.display="block"
popupbox.style.display="block"



})
var cancelbtn = document.getElementById("cancel-book")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
popupbox.style.display="none"
})

// select container , add-book, book-title-input, book-author-input, book-desc-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescinput = document.getElementById("book-desc-input")


addbook.addEventListener("click", function(event){
event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>` 
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove();
}

