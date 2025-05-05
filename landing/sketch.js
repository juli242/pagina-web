let ancho;
let alto;

let angulo1 = 0;
let angulo2 = 120;
let angulo3 = 240;

let radio1 = 0;
let radio2 = 0;
let radio3 = 0;



function setup() {
  createCanvas(windowWidth, 700);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background(0);
}

function draw() {
  background(0, 2); // Fondo con leve transparencia para efecto de estela

  translate(width / 2, height / 2);

  let rotacion = map(mouseX, 0, 1920, -2, 2);


  // Figura 1: círculo
  push();
  rotate(angulo1);
  fill("cyan");
  circle(radio1, 0, 30);
  pop();
  angulo1 += rotacion;
  radio1 += 1;

  // Figura 2: rectángulo
  push();
  rotate(angulo2);
  fill("magenta");
  rect(radio2, 0, 40, 20);
  pop();
  angulo2 += rotacion;
  radio2 += 1;

  // Figura 3: triángulo
  push();
  rotate(angulo3);
  fill("yellow");
  triangle(radio3, -15, radio3 - 10, 15, radio3 + 10, 15);
  pop();
  angulo3 += rotacion;
  radio3 += 1;

  if (radio1 > 1200) {
    radio1 = 0;
    radio2 = 0;
    radio3 = 0;
  }
}