describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      land: null
    };
    spyOn(plane,'land');
  });

  describe("#planes", function(){
    it("has no planes by default", function() {
      expect(airport.planes()).toEqual([]);
    });
  });

  describe("#land", function(){
    it("has the plane once landed", function() {
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });
    it("calls land on plane", function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
});
