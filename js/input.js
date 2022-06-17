// player 1 buttons
const keyUpArrow = 38;
const keyDownArrow = 40;
const keyLeftArrow = 37;
const keyRightArrow = 39;

// player 2 buttons
const keyW = 87;
const keyS = 83;
const keyA = 65;
const keyD = 68;

function inputInit() {
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  p1.setupControls(keyUpArrow, keyDownArrow, keyLeftArrow, keyRightArrow);
}

function setKeyHoldState(thisKey, thisPlayer, setTo) {
  if(thisKey === thisPlayer.controlKeyForNorth) {
    thisPlayer.keyHeldNorth = setTo;
  } else if(thisKey === thisPlayer.controlKeyForSouth) {
    thisPlayer.keyHeldSouth = setTo;
  } 
  if(thisKey === thisPlayer.controlKeyForWest) {
    thisPlayer.keyHeldWest = setTo;
  } else if(thisKey === thisPlayer.controlKeyForEast) {
    thisPlayer.keyHeldEast = setTo;
  } 
}

function keyPressed(evt) {
  setKeyHoldState(evt.keyCode, p1, true);
  evt.preventDefault();
}

function keyReleased(evt)	{
  setKeyHoldState(evt.keyCode, p1, false);
}