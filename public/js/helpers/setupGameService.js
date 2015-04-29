var wrapper = function(BowlingGame, BowlingFrame) {
  var setupGame = function(){
    frames = [];
    game = new BowlingGame();
    for (var i = 10; i >= 0; i--) {      
      frames.push(new BowlingFrame());
    };
    game.hold(frames);
    game.holdBonusFrame(new BowlingFrame());
  };
  return setupGame
};

angular
  .module('bowling')
  .factory('setupGame', ['BowlingGame', 'BowlingFrame', wrapper])