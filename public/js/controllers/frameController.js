frameController = function(BowlingGame, BowlingFrame, $scope) {
  

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
  
  $scope.scoreCard = game.scoreCard


  $scope.currentlyLeft = 11;
  $scope.OverAllScore = 0;

  this.newGame = function(){
    game = {};
    setupGame();
    $scope.scoreCard = game.scoreCard
    $scope.OverAllScore = 0;
  };

  this.roll = function(pins){
    game.roll(pins);
    $scope.currentlyLeft = game.currentFrame ? game.currentFrame.leftOver + 1 : 10 + 1;
    $scope.OverAllScore = game.OverAllScore
    $scope.isOver = game.isOver;
  }
  
};

angular
  .module('bowling')
  .controller('frameController', frameController)