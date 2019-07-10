/*******************************************************************************
 * The main game logic controller that manages the current game state
 ******************************************************************************/
var _ = require("underscore");
var Color = require("../../shared/color.js").Color;
this.Shared = new (require("../../shared/sharedUtil.js").SharedUtil)(_, Color);

//------------------------------------------------------------------------------
// Get the most recent turn of the game
this.getCurrentTurn = function(game) {
  return game.turns[game.turns.length - 1];
}

//------------------------------------------------------------------------------
// Get the second to last turn
this.getPreviousTurn = function(game) {
  if (game.turns.length > 1) {
    return game.turns[game.turns.length - 2];
  }
  return null;
}

//------------------------------------------------------------------------------
// Add a new turn to the game and return it
this.addNewTurn = function(game, turnToCopy) {
  game.turns.push(this.Shared.cloneObject(turnToCopy));
  var newTurn = this.getCurrentTurn(game);
  ++newTurn.roundNumber;
  console.log("\n++++++++++++++++ Turn Number: " + newTurn.roundNumber + " ++++++++++++++++\n");

  // Reset player information every round
  newTurn.players.forEach(function(player) {
    player.scannedNodes = [];
    player.scannedExploitLinks = [];
    player.reports = [];
    delete player.investments;
    delete player.orders;
  });

  return newTurn;
};

//------------------------------------------------------------------------------
this.addReport = function(player, actionType, location, params) {
  player.reports.push({ action: actionType, location: location, params: params });
}

//------------------------------------------------------------------------------
// Convert a string to boolean somewhat reliably.  Handy for parsing ENV
this.str2bool = function(strvalue){
  return (strvalue && typeof strvalue == 'string') ? (strvalue.toLowerCase() == 'true') : (strvalue == true);
};
