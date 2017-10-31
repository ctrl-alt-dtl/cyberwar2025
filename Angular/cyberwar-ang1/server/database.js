/*******************************************************************************
 * Defines structure and helper functions for the game's state
 ******************************************************************************/

var mongoose = require('mongoose');
var _ = require("underscore");
var log = require('./log').log;

module.exports = {
  getGameModel: getGameModel,
};

var Color = require('../shared/color.js').Color;
var ResearchType = require('../shared/researchType.js').ResearchType;

var Schema = mongoose.Schema;

//------------------------------------------------------------------------------
// Game Data

// Schema for research
var research = {};
_.each(ResearchType, function(type) { research[type] = { type: Number, default: 0 }});
var researchSchema = new Schema(research, { _id: false });

// Schema for a player
var playerSchema = new Schema({
  name        : { type: String, default: '' }, // The player's name
  color       : { type: String, default: '' }, // What color the player is playing as
  research    : researchSchema,                // What research this player has done
  investments : researchSchema,                // How much the player invested in each research type this turn
}, { _id: false });

// Schema for a server node
var serverNodeScheme = new Schema({
  domainColor : { type: String, default: '' }, // The color of the player domain this node is in
  index       : { type: Number, default: 0 },  // The index of the node
  ownerColor  : { type: String, default: '' }, // The color of the node's owner
  strength    : { type: Number, default: 0 },  // The current server node strength
}, { _id: false });

// Schema that defines the state of the game for one turn
var turnSchema = new Schema({
  roundNumber : { type: Number, default: 0 }, // Which round number is it
  players     : [playerSchema],               // The state of all players at the beginning of this turn
  serverNodes : [serverNodeScheme],           // The list of all server nodes on the board
}, { _id: false });

// Schema for our game.
var gameSchema = new Schema({
  turns : [turnSchema], // The list of turns that make up this game
});

//------------------------------------------------------------------------------
var gameModel = mongoose.model('GameModel', gameSchema);
if (!gameModel) {
  log.error('Failed to create database game model');
}

function getGameModel() {
  return gameModel;
}
