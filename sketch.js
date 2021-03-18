let b;
function setup() {
  createCanvas(640, 360);
  b=new Ball();
}
function myFunction() {
  b.position.x = document.getElementById("mynumberX").value;
  document.getElementById("demo").innerHTML = b.position.x;
   b.position.y = document.getElementById("mynumberY").value;
  document.getElementById("demo1").innerHTML = b.position.y;
   b.velocity.x = document.getElementById("mynumberXspeed").value;
  document.getElementById("demo2").innerHTML = b.velocity.x;
   b.velocity.y = document.getElementById("mynumberYspeed").value;
  document.getElementById("demo3").innerHTML = b.velocity.y;
   b.position.x = parseFloat(b.position.x);
   b.position.y = parseFloat(b.position.y);
   b.velocity.x = parseFloat(b.velocity.x);
   b.velocity.y = parseFloat(b.velocity.y);
}
function draw() {
  background(155);
  b.update();
  b.display();
}
