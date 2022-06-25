const playerMoveSpeed = 6;

function warriorClass() {
  // var for input states
  this.keyHeldNorth = false;
  this.keyHeldSouth = false;
  this.keyHeldWest = false;
  this.keyHeldEast = false;

  this.setupControls = function(northKey, southKey, westKey, eastKey) {
    this.controlKeyForNorth = northKey;
    this.controlKeyForSouth = southKey;
    this.controlKeyForWest = westKey;
    this.controlKeyForEast = eastKey;
  }
  
  this.init = function(whichGraphic, whichName) {
    this.myBitmap = whichGraphic;
    this.myName = whichName;
    this.reset();
  }

  this.reset = function() {    
    if (this.homeX == undefined) {
      for(i=0; i<roomGrid.length; i++) {
        if(roomGrid[i] === player) {
          var tileRow = Math.floor(i/roomCols);
          var tileCol = i%roomCols;

          this.homeX = tileCol * tileWidth + 0.5*tileWidth;
          this.homeY = tileRow * tileHeight + 0.5*tileHeight;
          roomGrid[i] = 0;
          break;
        }
      }
    }
    this.x = this.homeX;
    this.y = this.homeY;
    this.keysHeld = 0;
  }
  
  this.move = function() {
    var nextX = this.x;
    var nextY = this.y;

    if(this.keyHeldNorth) {
      nextY -= playerMoveSpeed;
    }
    if(this.keyHeldSouth) {
      nextY += playerMoveSpeed;
    }
    if(this.keyHeldWest) {
      nextX -= playerMoveSpeed;
    }
    if(this.keyHeldEast) {
      nextX += playerMoveSpeed;
    }
    
    var walkIntoTileTypeIndex = getTileIndexAtPixelCoord(nextX, nextY);
    var walkIntoTileType = wall;

    if(walkIntoTileTypeIndex != undefined) {
      walkIntoTileType = roomGrid[walkIntoTileTypeIndex];
    }
    
    switch(walkIntoTileType) {
      case floor:
        this.x = nextX;
        this.y = nextY;
        break;
      case treasure:
        document.getElementById("debugText").innerHTML = this.myName + " won!";
        this.reset();
        break;
      case door:
        if(this.keysHeld > 0) {
          this.keysHeld--;
          document.getElementById("debugText").innerHTML = "key: " + this.keysHeld;
          
          roomGrid[walkIntoTileTypeIndex] = floor;
        }
        break;
      case key:
        this.keysHeld ++;
        document.getElementById("debugText").innerHTML = "key: " + this.keysHeld;

        roomGrid[walkIntoTileTypeIndex] = floor;
        break;
      case wall:
      default:
        break;
    }
  }
  
  this.draw = function() {
    if(true) {
      drawBitmapCenteredAtLocationWithRoation(this.myBitmap, this.x, this.y);
    }
  }
}