var canvas;
var canvasContext;
var p1 = new warriorClass();

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  loadImages();

  p1.init(playerPic, "Blue Car");

  inputInit();
}

function loadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
  p1.move();
}

function drawEverything() {
  // adds the orange track
  drawTiles();

  // adds blue car image
  p1.draw();

}