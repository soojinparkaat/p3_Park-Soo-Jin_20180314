//set initial variables
var n = 0;
//c is the scaling factor, affecting the radius of the spiral
var c = 4;

var start = 0;

//set canvas size and angle mode
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

//set background color
function draw() {
  background(0);
  
  //shift the origin point to the center of the window
  translate(width/2,height/2);
 
  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    
    // assign various color/size/shape of each dot for each number key
    if (key=='1'){
    fill(random(255),random(255),random(255));
    noStroke();
    ellipse(x, y, 3, 3);
  }
  else if (key=='2'){
    fill(random(100,240),random(30,200),random(90,210));
    noStroke();
    ellipse(x, y, 4, 4);
  }
  else if (key=='3'){
    fill(random(30,255),random(80,220),random(255));
    noStroke();
    ellipse(x, y, 5, 5);
  }
  else if (key=='4'){
    fill(random(150,255),random(150,250),random(140,255));
    noStroke();
    ellipse(x, y, 6, 6);
  }
    else if (key=='5'){
    fill(random(100,240),random(30,200),random(90,210));
    noStroke();
    ellipse(x, y, 7, 7);
  }
  else if (key=='0'){
    fill(random(255),random(255),random(255));
    noStroke();
    rect(x, y, 3, 3);
  }
   else if (key=='9'){
    fill(random(30,255),random(80,220),random(255));
    noStroke();
    rect(x, y, 4, 4);
  }
  else if (key=='8'){
    fill(random(100,240),random(30,200),random(90,210));
    noStroke();
    rect(x, y, 5, 5);
  }
  else if (key=='7'){
    fill(random(150,255),random(150,250),random(140,255));
    noStroke();
    rect(x, y, 6, 6);
  }
    else if (key=='6'){
    fill(random(180,255),random(200,255),random(130,255));
    noStroke();
    rect(x, y, 7, 7);
  }
  }
  
  n += 3;
  start += 3;
}
