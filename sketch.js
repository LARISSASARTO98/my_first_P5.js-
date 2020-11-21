var diam1=0

function setup() {
  createCanvas(500,500);
  background("aquamarine");
}

function draw() {
  fill("pink");
  stroke('rgba(100%,0%,100%,0.5)');
  strokeWeight(4);
  ellipse(mouseX,mouseY,diam1,diam1);
  
  textSize(50);  
  textFont("Strenyous");
  textStyle(NORMAL);
  textAlign(LEFT);
  text("Tropical Vibes",50,50);
  
}
  
  function mousePressed(){
    diam1=diam1+5;
}

  