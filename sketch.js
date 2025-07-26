function setup() {
  createCanvas(400, 400);
}
xjogador1 = 0;
xjogador2 = 0;

function draw() {
  if (focused == true) {
    background("#8FBC8F");
  } else {
    background(220);
  }
  textSize(50);
  text("🍉", xjogador1, 100);
  textSize(50);
  text("🍐", xjogador2, 300);

  rect(350, 0, 10, 400);

  if (xjogador1 > 350) {
    textSize(30);
    text("Jogador 1 venceu!!!", 20, 200);

    noLoop();
  }
  if (xjogador2 > 350) {
    textSize(30);
    text("Jogador 2 venceu!!!", 20, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xjogador1 = xjogador1 + random(20);
  }
  if (key == "l") {
    xjogador2 = xjogador2 + random(20);
  }
}
