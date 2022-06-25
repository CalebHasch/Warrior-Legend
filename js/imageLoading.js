var playerPic=document.createElement("img");
var floorPic=document.createElement("img");
var wallPic=document.createElement("img");
var treasurePic=document.createElement("img");
var keyPic=document.createElement("img");
var doorPic=document.createElement("img");
var tilePics = [];
var picsToLoad = 0;

function beginLoadingImage(img, file) {
  picsToLoad++;
  img.onload=countLoadedImageAndLaunchIfReady;
  img.src = "images/" + file;
}

function countLoadedImageAndLaunchIfReady() {
  picsToLoad -= 1;

  if(picsToLoad === 0) {
    loadingDoneSoStartGame();
  }
}

function loadImages() {
  var imageList = [
    {varName:playerPic, file:"warrior-remove74X50.png"},
    {varName:floorPic, file:"asphalt2_50x50.jpg"},
    {varName:wallPic, file:"brick-50x50.png"},
    {varName:keyPic, file:"key-transparent60x30.png"},
    {varName:treasurePic, file:"treasure-transparent50x41.png"},
    {varName:doorPic, file:"door_closed-transparent50x50.png"}
  ]
  
  for(var i=0; i<imageList.length; i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].file);
  }
}
