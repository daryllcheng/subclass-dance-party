$(document).ready(function() {
  window.dancers = [];

  $('.addBlinkingDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var randomHeight = $("body").height() * Math.random();
    var randomWidth = $("body").width() * Math.random();

    var dancer = new dancerMakerFunction(
      randomHeight,
      randomWidth,
      Math.random() * 1000
    );

    dancer.setPosition(randomHeight, randomWidth);
    dancers.push(dancer);

    $('body').append(dancer.$node);

    $('#lineUpButton').on('click', function(event) {
      var blinkingNodes = [];
      for (var index = 0; index < dancers.length; index++) {
        if (dancers[index] instanceof makeBlinkyDancer) {
          blinkingNodes.push(dancers[index]);
        }
      }
      for (var blinker = 0; blinker < blinkingNodes.length; blinker++) {
        blinkingNodes[blinker].lineUp(blinkingNodes, blinker);
      }
    });

    dancer.$node.draggable({
      stop: function() {
        var height = dancer.top;
        var width = dancer.left;
        this.setPosition(height, width);
      }
    });

  });




  $('.addBouncingDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var randomHeight = $("body").height() * Math.random();
    var randomWidth = $("body").width() * Math.random();

    var dancer = new dancerMakerFunction(
      randomHeight,
      randomWidth,
      Math.random() * 1000
    );

    dancer.setPosition(randomHeight, randomWidth);
    dancers.push(dancer);

    $('body').append(dancer.$node);
    
    dancer.$node.on('mouseover', function(event) {
      dancer.shake = true;
    });

    dancer.$node.on('mouseleave', function(event) {
      dancer.shake = false;
    });

    $('#lineUpButton').on('click', function(event) {
      var bouncingNodes = [];
      for (var index = 0; index < dancers.length; index++) {
        if (dancers[index] instanceof makeBouncingDancer) {
          bouncingNodes.push(dancers[index]);
        }
      }
      for (var bouncer = 0; bouncer < bouncingNodes.length; bouncer++) {
        bouncingNodes[bouncer].lineUp(bouncingNodes, bouncer);
      }
    });

    dancer.$node.draggable({
      stop: function() {
        var height = dancer.top;
        var width = dancer.left;
        dancer.setPosition(height, width);
      }
    });

  });

  $('.addSpinningDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var randomHeight = $("body").height() * Math.random();
    var randomWidth = $("body").width() * Math.random();

    var dancer = new dancerMakerFunction(
      randomHeight,
      randomWidth,
      Math.random() * 1000
    );

    dancer.setPosition(randomHeight, randomWidth);
    dancers.push(dancer);

    dancer.$node.on('mouseover', function(event) {
      dancer.shake = true;
    });

    dancer.$node.on('mouseleave', function(event) {
      dancer.shake = false;
    });

    $('body').append(dancer.$node);

    $('#lineUpButton').on('click', function(event) {
      var spinningNodes = [];
      for (var index = 0; index < dancers.length; index++) {
        if (dancers[index] instanceof makeSpinningDancer) {
          spinningNodes.push(dancers[index]);
        }
      }
      for (var spinner = 0; spinner < spinningNodes.length; spinner++) {
        spinningNodes[spinner].lineUp(spinningNodes, spinner);
      }
    });

    dancer.$node.draggable();

  });

 $('.addSwimmingDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var randomHeight = $("body").height() * Math.random();
    var randomWidth = $("body").width() * Math.random();

    var dancer = new dancerMakerFunction(
      randomHeight,
      randomWidth,
      Math.random() * 1000
    );

    dancer.setPosition(randomHeight, randomWidth);
    dancers.push(dancer);

    dancer.$node.on('mouseover', function(event) {
      dancer.shake = true;
    });

    dancer.$node.on('mouseleave', function(event) {
      dancer.shake = false;
    });

    $('body').append(dancer.$node);

    $('#lineUpButton').on('click', function(event) {
      var swimmingNodes = [];
      for (var index = 0; index < dancers.length; index++) {
        if (dancers[index] instanceof makeSwimmingDancer) {
          swimmingNodes.push(dancers[index]);
        }
      }
      for (var spinner = 0; spinner < swimmingNodes.length; spinner++) {
        swimmingNodes[spinner].lineUp(swimmingNodes, spinner);
      }
    });

    dancer.$node.draggable({
      stop: function() {
        var height = dancer.top;
        var width = dancer.left;
        dancer.setPosition(height, width);
      }
    });

  });
  
   $('.addRandomDancersButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var randomHeight = $("body").height() * Math.random();
    var randomWidth = $("body").width() * Math.random();

    var dancer = new dancerMakerFunction(
      randomHeight,
      randomWidth,
      Math.random() * 1000
    );

    dancer.setPosition(randomHeight, randomWidth);
    dancers.push(dancer);

    dancer.$node.on('mouseover', function(event) {
      dancer.shake = true;
    });

    dancer.$node.on('mouseleave', function(event) {
      dancer.shake = false;
    });

    $('body').append(dancer.$node);

    $('#lineUpButton').on('click', function(event) {
      var randomNodes = [];
      for (var index = 0; index < dancers.length; index++) {
        if (dancers[index] instanceof makeRandomDancers) {
          randomNodes.push(dancers[index]);
        }
      }
      for (var spinner = 0; spinner < randomNodes.length; spinner++) {
        randomNodes[spinner].lineUp(randomNodes, spinner);
      }
    });

    dancer.$node.draggable({
      stop: function() {
        var height = dancer.top;
        var width = dancer.left;
        dancer.setPosition(height, width);
      }
    });

  });

});

