var wrapper = function(BowlingGame, BowlingFrame) {
  var game;
  var setupGame = function(){
    var frames = [];
    game = new BowlingGame();
    for (var i = 10; i >= 0; i--) {      
      frames.push(new BowlingFrame());
    };
    game.hold(frames);
    game.holdBonusFrame(new BowlingFrame());

  };
  setupGame();
  return game
};

angular
  .module('bowling')
  .factory('setupGame', ['BowlingGame', 'BowlingFrame', wrapper])