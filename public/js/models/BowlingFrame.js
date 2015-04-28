var frameWrapper = function(){
  var BowlingFrame = function(){
    this.rolls = [];
    this.bonus = 0;
    this.strike = false;
    this.spare = false;
    this.score = 0;
    this.leftOver = 10;
  };

  BowlingFrame.prototype.saveRoll = function (pins) {
    this.rolls.push(pins);
    this.leftOver -= pins;
    this.special()
  };

  BowlingFrame.prototype.special = function () {
    if(this.rolls.length == 2 && this.rolls[0] + this.rolls[1] == 10){
      this.spare = true;
    }else if(this.rolls[0] == 10){
      this.strike = true;
    };
  };

  BowlingFrame.prototype.frameScore = function () {
    firstRoll = this.rolls[0] || 0
    secondRoll = this.rolls[1] || 0
    this.score = firstRoll + secondRoll + this.bonus
    return this.score;
  };

  return BowlingFrame
};


angular
  .module('bowling')
  .service('BowlingFrame', frameWrapper)