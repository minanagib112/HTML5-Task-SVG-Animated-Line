var line = document.getElementById("myLine");
var x = 0 ;
var y = 0;

function animateLine() {
  x += 5; 
  y += 5; 
  line.setAttribute("x2", x); 
  line.setAttribute("y2", y); 
  if (x == 305 && y == 305) { 
    clearInterval(interval);
    alert("animation end!");
  
}
}
var interval = setInterval(animateLine, 100); 
