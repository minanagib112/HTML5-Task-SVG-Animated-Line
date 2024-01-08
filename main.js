function changeColor() {
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");
  var text = document.getElementById("text");

  var r = parseInt(red.value);
  var g = parseInt(green.value);
  var b = parseInt(blue.value);

  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);

  if (hexR.length == 1) hexR = "0" + hexR;
  if (hexG.length == 1) hexG = "0" + hexG;
  if (hexB.length == 1) hexB = "0" + hexB;

  var color = "#" + hexR + hexG + hexB;

  text.style.color = color;
}

red.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);
blue.addEventListener("input", changeColor);
