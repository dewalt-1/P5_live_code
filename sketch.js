/**
 * The user can type and their words will appear on the screen.
 */

//test
 
 let message = "";
 let font;
 let draw_a_line = false;

 function preload() {
  font = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
  );
}

 function setup(){
   createCanvas(windowWidth, windowHeight, WEBGL);
   textFont(font, 48);
   //textSize(48);
   fill(255);
   //noStroke();
 }
 
 function draw(){
   background(0);
   text(message, 10, 50);
   //line();

   //*******triggers*******
   if (message == "make line") {
    line();
   }

   //if (draw_a_line = true){
    // line();
   //}

  if (message == "make mesh"){
    mesh();
  }
    
  }

 function keyPressed(){
   // First check if the key is something we want to type.
   if (key.length == 1 && key.match(/[\S,\ ,\n]/)) {
     message = message + key;
   // otherwise, if it is the backspace key remove one charater.
   } else if (keyCode == BACKSPACE || keyCode == DELETE){
     message = message.substr(0, message.length - 1);
   // If it is the enter key, then add a newline.
   } else if (keyCode == ENTER){
     message += "\n";
   }
   return false;
 }

 function line () {
    strokeWeight(4);
    stroke(255,255,255);
    line(30, 20, 85, 75);
 }

 function mesh () {
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(300);
  pop();
 }