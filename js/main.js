console.log(window.location.pathname);

if (window.location.pathname == '/Users/admin/Desktop/About_Me/profile.html') {
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
}

//
//
// var vision1 = document.querySelector("#vision1");
// var vision2 = document.querySelector("#vision2");
// var vision3 = document.querySelector("#vision3");
// console.log(vision1);
// 
// vision1.addEventListener("mouseover", function(e){
//   console.log("inside");
//   vision1.classList.add("animate1");
//   console.log(vision1);
//   vision1.removeEventListener("mouseover", function(){});
// });
//
// vision1.className = ("");
// console.log(vision1);
//
//
// vision1.addEventListener("mouseout", function(e){
//   vision1.classList.remove(".animate1");
// });
