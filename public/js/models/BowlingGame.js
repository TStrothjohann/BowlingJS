var wrapper = function(){
  var BowlingGame = function(){
    this.scoreCard = [];
    this.freshFrames = [];
    this.bonusFrame = [];
    this.isOver = false;
    this.OverAllScore = 0;
  };

  BowlingGame.prototype.roll = function(pins) {
    if(this.isFinal()){this.rollFinal(pins);}
    else {
      if(this.currentFrame === undefined){
        this.nextFrame();
        this.currentFrame.saveRoll(pins);
        if(this.isStrike(pins)){this.finishFrame();}
      }else{
        this.currentFrame.saveRoll(pins);
        this.finishFrame();
      }
      this.checkIfOver();
    }
  };

  BowlingGame.prototype.finishFrame = function() {
  this.scoreCard.push(this.currentFrame);
  this.currentFrame = undefined;
  this.bonusCalculator();
  this.calculateScore();
};

BowlingGame.prototype.hold = function (frame) {
  if(Array.isArray(frame))
    {for(var i=0; i<frame.length; i++){this.freshFrames.push(frame[i]);}
  }else{
    this.freshFrames.push(frame);
  }
};

BowlingGame.prototype.nextFrame = function () {
  this.currentFrame = this.freshFrames.shift();
};

BowlingGame.prototype.isStrike = function (pins) {
  return pins === 10;
};

BowlingGame.prototype.holdBonusFrame = function (frame) {
  this.bonusFrame.push(frame);
};

BowlingGame.prototype.checkIfOver = function () {
  var index = this.scoreCard.length-1;
  if(this.freshFrames.length === 0 && this.scoreCard[index].rolls.length === 2){
    this.isOver = true;}
};

BowlingGame.prototype.rollFinal = function (pins) {
  if(this.scoreCard[9].strike){
    if(this.currentFrame === undefined){
      this.nextFrame();
      this.currentFrame.saveRoll(pins);
    }else{
      this.currentFrame.saveRoll(pins);
      this.finishFrame();
      this.isOver = true;
    }
  }else{
    this.nextFrame();
    this.currentFrame.saveRoll(pins);
    this.finishFrame();
    this.isOver = true;
  }
};

BowlingGame.prototype.isFinal = function () {
  if(this.scoreCard.length === 10 && this.scoreCard[9].spare){
    this.freshFrames = this.bonusFrame;
    return true;
  }else if(this.scoreCard.length === 10 && this.scoreCard[9].strike){
    this.freshFrames = this.bonusFrame;
    return true;
  }else{ return false; }
};

BowlingGame.prototype.bonusCalculator = function () {
for(var i=1; i<this.scoreCard.length; i++){
  var previous = this.scoreCard[i-1];
  var current = this.scoreCard[i];
  var nextFirstRoll = this.scoreCard[i+1] && this.scoreCard[i+1].rolls[0];
  var secondroll = current.rolls[1];
    if(previous !== undefined && previous.spare === true){
      previous.bonus = current.rolls[0];
    }
    if(previous !== undefined && previous.strike === true && secondroll !== undefined){
      previous.bonus = current.rolls[0] + secondroll;
    }
    if(previous !== undefined && previous.strike === true && secondroll === undefined && nextFirstRoll !== undefined){
      previous.bonus = current.rolls[0] + nextFirstRoll;

    }

  }
};

BowlingGame.prototype.calculateScore = function () {
this.OverAllScore = 0;
  for (var i = 9; i >= 0; i--) {
    this.OverAllScore += this.scoreCard[i] && this.scoreCard[i].frameScore() || 0;
  }
};

  return BowlingGame;
};

angular
  .module('bowling')
  .factory('BowlingGame', wrapper);