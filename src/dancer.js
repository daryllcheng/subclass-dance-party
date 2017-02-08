// // // // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // console.log('dancer');
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// }; 

var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="blinkingdancer"></span>');
  this.step();
  // this.$node.draggable();
    // stop: function() {
    //   var height = this.top;
    //   console.log('height:', height);
    //   var width = this.left;
    //   console.log('width:', width);
    //   this.setPosition(height, width);
    // }
    // refreshPositions: true
  // });

}

makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    // invokes this.step(), which is set to the subclass's step() method,
    // after `timeBetweenSteps` amount of milliseconds. `this` is bound
    // to `makeBlinkyDancer.prototype`.
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(array, index) {
  // get width of page and then divide by number of dancers to line them up evenly across the page
  var row = Math.floor($("body").height()/1.10);
  var column = Math.floor($("body").width() / array.length) * index;
  console.log('row',row);
  console.log('column', column);
  this.setPosition(row, column);
};

makeDancer.prototype.interact = function() {

}
