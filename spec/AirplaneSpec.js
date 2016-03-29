describe('Airplane', function() {

  var testAirplane;

  beforeEach(function() {
    testAirplane = new Airplane();
  });

  it('can be told to land', function() {
    expect(testAirplane.land).toBeDefined();
  });

  it('can be told to takeoff', function(){
    expect(testAirplane.takeOff).toBeDefined();
  });

  it('has a isFlying attribute', function(){
    expect(testAirplane.isFlying).toBeDefined();
  });
});
