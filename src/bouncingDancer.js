var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncingdancer"><img class="pokemon1" src="src/pokemon1.png"></span>');
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);

makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  this.$node.effect("bounce", {distance: Math.floor(20 * Math.random()), times: 5}, "slow");
  this.oldStep.call(this);
};