let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  console.log("running");
}

function draw() {
  fractialTree(60, 20, 60, 80 ,4);


}

function fractialTree(x, y, x2, y2, i) {
  counter++;
  if (counter < i) {
    branch(x, y, x2, y2);
    return fractialTree(x, y, x2, y2, i);
  }
}

function branch(x, y, x2, y2) {
  stroke(200);
  line(windowWidth / 2 + x, windowHeight - y, windowWidth / 2 + x2,  windowHeight - y2 -y);
  console.log( windowHeight - y2 - y);
}
