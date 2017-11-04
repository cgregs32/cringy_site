var colorDisplay = document.querySelectorAll(".colorDisplay");
var colorBox = document.querySelectorAll(".wrapper2");

colorBox[0].addEventListener("click", displayColor)

function randomColor(){
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function displayColor(){
  colorBox[0].style.backgroundColor = randomColor();
  colorDisplay.forEach(function(val){
    val.style.backgroundColor = randomColor();
  });
}
