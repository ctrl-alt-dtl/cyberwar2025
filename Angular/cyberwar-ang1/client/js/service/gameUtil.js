angular.module("CyberWar")
.service('GameUtil', function() {
  var sharedUtil = new SharedUtil(ActionType, Color, ActionUtil, EqualityUtil, ListUtil, NetworkUtil, PlayerUtil);
  // Add all shared util properties to the GameUtil service object
  Object.getOwnPropertyNames(sharedUtil).forEach(function(propertyName) {
    this[propertyName] = sharedUtil[propertyName];
  }, this);

  // ----------------------------------------------------------------------------
  this.isActionUnlocked = function(currentResearchInvestment, level) {
    return level <= this.Action.getResearchLevelUnlocked(currentResearchInvestment);
  }

  // ----------------------------------------------------------------------------
  // A research level is partially unlocked if it's the next level to be unlocked
  // and there are some points allocated towards it
  this.isActionPartiallyUnlocked = function(currentResearchInvestment, level) {
    // The current highest level unlocked
    var levelUnlocked =  this.Action.getResearchLevelUnlocked(currentResearchInvestment);
    // Determine the amount of levels needed to unlock this one
    var levelsNeeded = level - levelUnlocked;
    // If the amount of levels needed to unlock this are between 0 and 1, it is partially unlocked
    return 0 < levelsNeeded && levelsNeeded < 1;
  }

  //------------------------------------------------------------------------------
  this.getServerNodeDisplayedColor = function(serverNode, player, positivelyLinkedNodes) {
    // If it's a base, return its location's color
    if (serverNode.location.index == 0) {
      return serverNode.location.color;
    }

    // If this is the player's node, they see the real color
    if (player.color == serverNode.ownerColor) {
      return serverNode.ownerColor;
    }
    else {
      // See if they have scanned the node and if so, display the scanned information
      var scannedNode = this.List.getServerNode(player.scannedNodes, serverNode.location.color, serverNode.location.index)
      if (scannedNode) {
        return scannedNode.ownerColor;
      }
      // Otherwise, if this is part of the player's network or in their domain, show a color
      else if (this.List.isLocationInList(serverNode.location, positivelyLinkedNodes) || serverNode.location.color == player.color || this.List.isLocationInLinkList(serverNode.location, player.exploitLinks)) {
        // If the node has a manipulate color, show that
        if (serverNode.manipulateColor) {
          return serverNode.manipulateColor;
        }
        // Otherwise, show the owner's color
        else {
          return serverNode.ownerColor;
        }
      }
    }
    // Otherwise, it's grey
    return '';
  }

  //------------------------------------------------------------------------------
  this.getServerNodeManipulatedColor = function(serverNode, player) {
    // If this node is manipulated
    if (serverNode.manipulateColor) {
      // If the current player owns it, then return the manipulated color
      if (player.color == serverNode.ownerColor) {
        return serverNode.manipulateColor;
      }

      // If the player has scanned the node, then display the scanned information
      var scannedNode = this.List.getServerNode(player.scannedNodes, serverNode.location.color, serverNode.location.index)
      if (scannedNode) {
        return scannedNode.manipulateColor;
      }
    }

    // Otherwise, it's default
    return '';
  }

  //------------------------------------------------------------------------------
  this.getServerNodeDisplayedText = function(serverNode, player, positivelyLinkedNodes) {
    // If the player owns this node, it is part of the player's network, or in their domain, show the server strength
    if (player.color == serverNode.ownerColor || this.List.isLocationInList(serverNode.location, positivelyLinkedNodes) || serverNode.location.color == player.color || this.List.isLocationInLinkList(serverNode.location, player.exploitLinks)) {
      return serverNode.strength;
    }
    // See if they have scanned the node and if so, display the scanned information
    var scannedNode = this.List.getServerNode(player.scannedNodes, serverNode.location.color, serverNode.location.index)
    if (scannedNode) {
      return scannedNode.strength;
    }
    // Otherwise, it's grey
    return 0;
  }

  //------------------------------------------------------------------------------
  this.getColor = function(colorName) {
    switch (colorName) {
      case Color.RED:
        return redColor;
      case Color.ORANGE:
        return orangeColor;
      case Color.YELLOW:
        return yellowColor;
      case Color.GREEN:
        return greenColor;
      case Color.BLUE:
        return blueColor;
      case Color.PURPLE:
        return purpleColor;
    }
    return grayColor;
  }

  //------------------------------------------------------------------------------
  this.getHexPosition = function(color, index) {
    return konvaHexPositions[color][index];
  }

  //------------------------------------------------------------------------------
  this.getHexMidPoint = function(color, index) {
    return konvaHexMidPoint[color][index];
  }
});
