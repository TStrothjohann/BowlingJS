describe('filter', function() {

  beforeEach(module('bowling'));

  describe('rangeFilter', function() {

    it('produces an array with given range',
        inject(function(rangeFilter) {
      expect(rangeFilter([], 11)).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    }));
  });


/* describe('setupGame service', function() {
    inject(function(setupGame))
  });*/
 
});