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
    
    var walkIntoTileType = getTileAtPixelCoord(nextX, nextY);
    
    if (walkIntoTileType === floor) {
      this.x = nextX;
      this.y = nextY;
    } else if(walkIntoTileType === treasure) {
      document.getElementById("debugText").innerHTML = this.myName + " won the race!";
      this.reset();
    }
  }
  
  this.draw = function() {
    if(true) {
      drawBitmapCenteredAtLocationWithRoation(this.myBitmap, this.x, this.y);
    }
  }
}