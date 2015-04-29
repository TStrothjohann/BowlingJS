frameController = function(BowlingGame, BowlingFrame) {
  

  setupGame = function(){
    game = new BowlingGame();
    frame = new BowlingFrame();
    frame1 = new BowlingFrame();
    frame2 = new BowlingFrame();
    frame3 = new BowlingFrame();
    frame4 = new BowlingFrame();
    frame5 = new BowlingFrame();
    frame6 = new BowlingFrame();
    frame7 = new BowlingFrame();
    frame8 = new BowlingFrame();
    frame9 = new BowlingFrame();
    bonusFrame = new BowlingFrame();
    frames = [frame, frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9];
    game.hold(frames);
    game.holdBonusFrame(bonusFrame);
  };

  setupGame();
  
  this.scoreCard = game.scoreCard
  this.currentlyLeft = game.currentFrame ? game.currentFrame.leftOver : 10;
  this.roll = function(pins){
    game.roll(pins);
  }
  
};

angular
  .module('bowling')
  .controller('frameController', frameController)