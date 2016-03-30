function Airport() {
  this._hangar = [];
};

// //
// // Airport.prototype.land = function(plane) {
// //   this._hangar.push(plane);
// //   plane.land();


Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  this._hangar = [];
};
