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

makeBouncingDancer.prototype.lineUp = function(array, index) {
  // get width of page and then divide by number of dancers to line them up evenly across the page
  var row = Math.floor($("body").height()/1.50);
  var column = Math.floor($("body").width() / array.length) * index;
  console.log('row',row);
  console.log('column', column);
  this.setPosition(row, column);
};