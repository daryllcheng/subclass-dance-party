var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinningdancer"><img class="pokemon2" src="src/pokemon2.png"></span>');
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);

makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  this.$node.effect("shake");
  this.oldStep.call(this);
};
