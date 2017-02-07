var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncingdancer"><img class="pokemon1" src="src/pokemon1.png"></span>');
  this.shake = false;
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);

makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  if (this.shake) {
    this.$node.effect('shake');
  } else {
    this.$node.effect("bounce", {distance: 10, times: 5}, "slow");
  }
  this.oldStep.call(this);
};