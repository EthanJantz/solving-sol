//Ethan Jantz + Sophia Wood
// Wall Drawing #11 (1969)
// A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed.
// https://github.com/wholepixel/solving-sol/blob/master/011/instructions.md
// | --- / \
// Equally divide the canvas into four quadrants
let quadrantWidth;
let quadrantHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  quadrantHeight = height / 2;
  quadrantWidth = width / 2;
  redChan = random(50, 150);
  greenChan = random(50, 150);
  blueChan = random(50, 150);
  line_width = random(1, 3);
  strokeWeight(line_width);
  noLoop();
  stroke(255);
}

function draw() {
  leftUpperCorner();
  leftLowerCorner();
  rightUpperCorner();
  rightLowerCorner();
}

function drawVertical(xStart, yStart) {
  let nL = random([30, 40, 50, 60]);
  let dw = quadrantWidth / nL;
  for (let i = 0; i < nL; i++) {
    x1 = xStart + i * dw;
    line(x1, yStart, x1, yStart + quadrantHeight);
  }
}

function drawHorizontal(xStart, xStop, yStart) {
  let nL = random([30, 40, 50, 60]);
  let dh = quadrantHeight / nL;
  for (let i = 0; i < nL; i++) {
    y1 = yStart + i * dh;
    line(xStart, y1, xStop, y1);
  }
}

function drawRightDiag(xStart, yStop) {
  let n = random([30, 40, 50, 60]);
  let nL = n / 2;
  let dw = quadrantWidth / nL;
  let dh = quadrantHeight / nL;
  for (i = 0; i <= nL; i++) {
    line(xStart, yStop - dh * i, xStart + dw * i, yStop);
  }
  for (i = 1; i < nL; i++) {
    line(
      xStart + quadrantWidth - dw * i,
      yStop - quadrantHeight,
      xStart + quadrantWidth,
      yStop - quadrantHeight + dh * i,
    );
  }
}

function drawLeftDiag(xStart, yStop) {
  let n = random([30, 40, 50, 60]);
  let nL = n / 2;
  let dw = quadrantWidth / nL;
  let dh = quadrantHeight / nL;
  for (i = 0; i <= nL; i++) {
    line(
      xStart + quadrantWidth - dw * i,
      yStop,
      xStart + quadrantWidth,
      yStop - dh * i,
    );
  }
  for (i = 1; i < nL; i++) {
    line(
      xStart + dw * i,
      yStop - quadrantHeight,
      xStart,
      yStop - quadrantHeight + dh * i,
    );
  }
}

function leftUpperCorner() {
  let rN = random(0.5, 1.5);
  fill(redChan * rN, greenChan * rN, blueChan * rN);
  rect(0, 0, quadrantWidth, quadrantHeight);
  drawRandomLine(0, quadrantWidth, 0, quadrantHeight);
}

function leftLowerCorner() {
  let rN = random(0.5, 1.5);
  fill(redChan * rN, greenChan * rN, blueChan * rN);
  rect(0, quadrantHeight, quadrantWidth, quadrantHeight);
  drawRandomLine(0, quadrantWidth, quadrantHeight, windowHeight);
}
function rightUpperCorner() {
  let rN = random(0.5, 1.5);
  fill(redChan * rN, greenChan * rN, blueChan * rN);
  rect(quadrantWidth, 0, quadrantWidth, quadrantHeight);
  drawRandomLine(quadrantWidth, windowWidth, 0, quadrantHeight);
}

function rightLowerCorner() {
  let rN = random(0.5, 1.5);
  fill(redChan * rN, greenChan * rN, blueChan * rN);
  rect(quadrantWidth, quadrantHeight, windowWidth, windowHeight);
  drawRandomLine(quadrantWidth, windowWidth, quadrantHeight, windowHeight);
}

function drawRandomLine(xStart, xStop, yStart, yStop) {
  let t = random([1, 2, 3, 4]);
  if (t === 1) {
    drawRightDiag(xStart, yStop);
    drawLeftDiag(xStart, yStop);
    drawHorizontal(xStart, xStop, yStart);
  } else if (t === 2) {
    drawVertical(xStart, yStart);
    drawLeftDiag(xStart, yStop);
    drawRightDiag(xStart, yStop);
  } else if (t === 3) {
    drawVertical(xStart, yStart);
    drawHorizontal(xStart, xStop, yStart);
    drawRightDiag(xStart, yStop);
  } else {
    drawVertical(xStart, yStart);
    drawHorizontal(xStart, xStop, yStart);
    drawLeftDiag(xStart, yStop);
  }
}

function keyPressed() {
  if (keyCode == 32) {
    setup();
    draw();
  }
}
