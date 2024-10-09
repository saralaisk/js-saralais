function setup() {
  createCanvas(600, 600);
   background("rgb(198,198,241)");
}


function draw() {
  
  stroke ("purple");
  fill ("pink ");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}