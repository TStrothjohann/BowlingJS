describe('User on Bowling Calculator Page', function(){
  beforeEach(function(){
    browser.get('http://localhost:3000');
  });


  it('can choose x out of ten pins', function(){
    expect(element.all(by.css('.pin')).count()).toEqual(11);
  });

  it('sees only as many pins as there are left in current frame', function(){
    element.all(by.binding('pin')).get(1).click();
    expect(element.all(by.css('.pin')).count()).toEqual(10);
  });

  it('can save a roll by clicking a pin number', function(){
    element.all(by.css('.pin')).first().click();
    element.all(by.css('.pin')).first().click();
    expect(element.all(by.css('.frame')).count()).toEqual(1)
  });

  it('shows the current score after frame is finished', function(){
    element.all(by.css('.pin')).first().click();
    element.all(by.css('.pin')).last().click();
    expect(element(by.id('current-score')).getText()).toEqual('Current Score: 10')
  });

});