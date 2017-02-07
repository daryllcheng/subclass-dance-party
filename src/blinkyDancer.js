var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  // toggles the span dancer (show/hides circle)
  this.$node.toggle();
  // calls superclass step() method, and bind `this` (refers to makeBlinkyDancer.prototype) to it
  this.oldStep.call(this);
};