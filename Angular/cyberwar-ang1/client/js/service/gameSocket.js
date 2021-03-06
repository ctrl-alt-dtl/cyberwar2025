angular.module("CyberWar")
.service('GameSocket', ['GameState', 'Socket', function(GameState, Socket) {
  var gid, user, updateCB;
  var requestSentCBListener = new Gambit.CallbackListener();

  // ----------------------------------------------------------------------------
  this.initialize = function(currentGID, currentUser, gameStateUpdatedCB) {
    gid = currentGID;
    user = currentUser;
    updateCB = gameStateUpdatedCB;
    GameState.currentPlayer = currentUser;
    Socket.addListener(onSocketOpened, onSocketMessage, onSocketClose);
    socketConnect();
  }

  //---------------------------------------------------------------------------
  this.addRequestSentListener = function(callback) {
    requestSentCBListener.addListener(callback);
  }

  //---------------------------------------------------------------------------
  this.removeRequestSentListener = function(callback) {
    requestSentCBListener.removeListener(callback);
  }

  // ----------------------------------------------------------------------------
  this.performAction = function(action) {
    requestSentCBListener.triggerAll();
    socketSend(GameRequest.SUBMIT, { gid: gid, user: user, action: action });
  }

  // ----------------------------------------------------------------------------
  var onSocketOpened = function() {
    socketSend(GameRequest.GET, { gid: gid, user: user });
  }

  // ----------------------------------------------------------------------------
  var onSocketMessage = function(socketData) {
    if (socketData.socketType === SocketType.GAME) {
      if (socketData.message.request == GameRequest.GET && updateCB) {
        updateCB(socketData.message.data);
      }
    }
  }

  // ----------------------------------------------------------------------------
  var onSocketClose = function() {
    setTimeout(socketConnect, 1000);
  }

  // ----------------------------------------------------------------------------
  var socketConnect = function() {
    Socket.setSocket(new SockJS('/game', {}, {
      transports: [
        "websocket",
        "iframe-eventsource",
        "htmlfile",
        "iframe-htmlfile",
        "xhr-polling",
        "iframe-xhr-polling",
        "jsonp-polling"
      ]
    }));
  }

  // ----------------------------------------------------------------------------
  var socketSend = function(request, data) {
    Socket.send(JSON.stringify({ socketType: SocketType.GAME, request: request, data: data }));
  }
}]);
