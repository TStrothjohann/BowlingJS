describe('filter', function() {

  beforeEach(module('bowling'));

  describe('rangeFilter', function() {

    it('produces an array with given range',
        inject(function(rangeFilter) {
      expect(rangeFilter([], 11)).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    }));
  });


  


describe("setupGame Service", function() {
  var BowlingGame, BowlingFrame, game, frame, setupGame;
  beforeEach(module('bowling'));

  beforeEach(function(){
    inject(function($injector) {
      BowlingFrame = $injector.get('BowlingFrame');
      BowlingGame = $injector.get('BowlingGame');
      setupGame = $injector.get('setupGame');
    });
  });

  it('sets up a game with 10 frames and a bonus frame', function(){
    var game = setupGame
    expect(game.freshFrames[0]).toEqual(new BowlingFrame)
    expect(game.freshFrames.length).toEqual(10)
    expect(game.bonusFrame.length).toEqual(1)
  });

  it('sets adds a bonus frame to the new game', function() {
    game = new BowlingGame
    frame = new BowlingFrame
    game.hold(frame);
    expect(game.freshFrames[0]).toEqual(new BowlingFrame);
  });
});


});