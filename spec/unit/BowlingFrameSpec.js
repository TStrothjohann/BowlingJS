var BowlingFrame, frame;

describe("BowlingFrame", function() {
  beforeEach(module('bowling'));
  
  beforeEach(function(){
    inject(function($injector) {
      BowlingFrame = $injector.get('BowlingFrame');
    });
    frame = new BowlingFrame();
  });


  it("can hold rolls", function() {
    frame.saveRoll(2)
    expect(frame.rolls).toEqual([2]);
  });


  it("can take a second roll", function() {
    frame.saveRoll(2)
    frame.saveRoll(3)
    expect(frame.rolls).toEqual([2,3])
  });

  it("knows when it's a spare", function() {
    frame.saveRoll(4)
    frame.saveRoll(6)
    expect(frame.spare).toBe(true)
  });

  it("know when it's a strike", function() {
    frame.saveRoll(10)
    expect(frame.strike).toBe(true)
  });

  it("knows it's score", function() {
    frame.saveRoll(8); frame.saveRoll(2);
    frame.bonus = 8
    frame.frameScore();
    expect(frame.score).toEqual(18);
  });

  it("knows how many pins are left", function(){
    frame.saveRoll(3);
    frame.saveRoll(5);
    expect(frame.leftOver).toEqual(2);
  });


});
