describe('User on Bowling Calculator Page', function(){
  beforeEach(function(){
    browser.get('http://localhost:3000');
  });


  it('can choose x out of ten pins', function(){
    expect(element.all(by.css('.pin')).count()).toEqual(10);
  });
});