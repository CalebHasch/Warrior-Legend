const tileWidth = 50;
const tileHeight = 50;
const roomCols = 16;
const roomRows = 12;
const floor = 0;
const wall = 1;
const player = 2;
const treasure = 3;
const key = 4;

var	roomGrid	=
						  [	4,	4,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
								4,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
								1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
								1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
								1,	0,	0,	0,	1,	1,	1,	1,	4,	4,	4,	1,	1,	1,	0,	1,
								1,	0,	0,	1,	1,	0,	0,	1,	1,	4,	1,	1,	0,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	1,
								1,	0,	0,	1,	0,	0,	1,	0,	0,	0,	1,	0,	0,	1,	0,	1,
								1,	0,	2,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	1,
								1,	1,	1,	1,	3,	3,	1,	1,	1,	4,	4,	4,	4,	1,	1,	1 ];    var tileCounter = roomCols * (roomRows - 3);

function getTileAtPixelCoord(pixelX,pixelY) {
  var row = Math.floor(pixelY/tileHeight);
  var column = Math.floor(pixelX/tileWidth);

  if(column >= roomCols || column < 0 || row < 0 || row >= roomRows) {
    return wall;
  } 
    var tileIndex = roomTileToIndex(column, row);

    return roomGrid[tileIndex];
}

function isWallAtTileCoord(roomTileCol, roomTileRow) {
  var tileIndex = roomTileToIndex(roomTileCol, roomTileRow);
  return (roomGrid[tileIndex] == wall);
}

function roomTileToIndex(tileCol, tileRow) {
  var tileIndex = tileCol + roomCols*tileRow;
  return tileIndex;
}

function drawTiles() {
  var tileIndex = 0;
  var tileTopEdgeY = 0;

  for(i=0; i<roomRows; i++) {
    var tileLeftEdgeX = 0;
    for(j=0; j<roomCols; j++) {

      var tileTypeHere = roomGrid[ tileIndex ];
      var useImg;

      switch( tileTypeHere ) {
        case floor:
          useImg = floorPic;
          break;
        case wall:
          useImg = wallPic;
          break;
        case treasure:
          useImg = treasurePic;
          break;
        case key:
          useImg = keyPic;
          break;
      }

      canvasContext.drawImage(useImg, tileLeftEdgeX, tileTopEdgeY);
      
      tileIndex++;
      tileLeftEdgeX += tileWidth;
    }
    tileTopEdgeY += tileHeight;
  }
}