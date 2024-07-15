/*jslint browser:true */
/*jshint esversion: 6 */

// Get the modal
var modal = document.getElementById("modal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("dimensionsimg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");


img.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};


var modal = document.getElementById("modal2");


var img = document.getElementById("modelimg");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};


var span = document.getElementsByClassName("close")[1];

span.onclick = function() { 
  modal.style.display = "none";
};

var modal = document.getElementById("modal3");


var img = document.getElementById("interiorimg");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};


var span = document.getElementsByClassName("close")[2];

span.onclick = function() { 
  modal.style.display = "none";
};

var modal = document.getElementById("modal4");


var img = document.getElementById("engineimg");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};


var span = document.getElementsByClassName("close")[3];

span.onclick = function() { 
  modal.style.display = "none";
};

var modal = document.getElementById("modal5");


var img = document.getElementById("endimg");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = "images/secret.jpeg";
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[4];

span.onclick = function() { 
  modal.style.display = "none";
};

// Getting references to the audio clip and button which activates it
const audio = new Audio("audio/aston_martin_sound.mp3");
const buttons = document.querySelectorAll("button");

// on click event
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});