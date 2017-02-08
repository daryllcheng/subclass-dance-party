var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncingdancer"><img class="pokemon1 animated infinite swing" src="src/pokemon1.png"></span>');
  this.shake = false;
  this.near = false;
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);

makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  var position = this.$node.position();
  this.drag(position);
  if (this.shake) {
    this.$node.effect('shake');
  }
  if (this.near) {
    // add class
    this.$node.addClass('animated infinite bounce');
  } else {
    // remove class
    this.$node.removeClass('animated bounce');
  }
  this.near = false;
  var distance = 0;
  for (var index = 0; index < dancers.length; index++) {
    if (JSON.stringify(this) !== JSON.stringify(dancers[index])) {
      distance = Math.sqrt(Math.pow((position.top - dancers[index].top), 2) + Math.pow((position.left - dancers[index].left), 2));
      if (distance < 100) {
        this.near = true;
      }
    }
  }
  this.oldStep.call(this);
};

makeBouncingDancer.prototype.lineUp = function(array, index) {
  // get width of page and then divide by number of dancers to line them up evenly across the page
  var row = Math.floor($("body").height()/1.50);
  var column = Math.floor($("body").width() / array.length) * index;
  this.setPosition(row, column);
};

makeBouncingDancer.prototype.drag = function(position) {
  var context = this;
  this.$node.draggable({
      stop: function(event, ui) {
        var height = position.top;
        var width = position.left;
        context.setPosition(height, width);
      }
    });
}