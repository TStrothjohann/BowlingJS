frameController = function(BowlingGame, BowlingFrame, $scope, setupGame) {
  
  setupGame();
  
  $scope.scoreCard = game.scoreCard;
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