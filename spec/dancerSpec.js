describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    it('should lineup all the dancers', function() {
        sinon.spy(blinkyDancer, 'setPosition');
        blinkyDancer.lineUp([blinkyDancer],1);
        expect(blinkyDancer.setPosition.called).to.be.true;
    });
  });
});


describe('bouncingDancer', function() {

  var bouncingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncingDancer = new makeBouncingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    sinon.spy(bouncingDancer.$node, 'effect');
    bouncingDancer.shake = true;
    bouncingDancer.step();
    expect(bouncingDancer.$node.effect.called).to.be.true;
  });
  it('should have a step function that adds an animation class (bounce)', function() {
    sinon.spy(bouncingDancer.$node, 'addClass');
    bouncingDancer.near = true;
    bouncingDancer.step();
    expect(bouncingDancer.$node.addClass.called).to.be.true;
  });
  it('should have a step function that removes an animation class (bounce)', function() {
    sinon.spy(bouncingDancer.$node, 'removeClass');
    bouncingDancer.near = false;
    bouncingDancer.step();
    expect(bouncingDancer.$node.removeClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncingDancer, 'step');
      expect(bouncingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncingDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    it('should lineup all the dancers', function() {
        sinon.spy(bouncingDancer, 'setPosition');
        bouncingDancer.lineUp([bouncingDancer],1);
        expect(bouncingDancer.setPosition.called).to.be.true;
    });
  });
});

describe('spinningDancer', function() {

  var spinningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new makeSpinningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    sinon.spy(spinningDancer.$node, 'effect');
    spinningDancer.shake = true;
    spinningDancer.step();
    expect(spinningDancer.$node.effect.called).to.be.true;
  });
  it('should have a step function that adds an animation class (bounce)', function() {
    sinon.spy(spinningDancer.$node, 'addClass');
    spinningDancer.near = true;
    spinningDancer.step();
    expect(spinningDancer.$node.addClass.called).to.be.true;
  });
  it('should have a step function that removes an animation class (bounce)', function() {
    sinon.spy(spinningDancer.$node, 'removeClass');
    spinningDancer.near = false;
    spinningDancer.step();
    expect(spinningDancer.$node.removeClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spinningDancer, 'step');
      expect(spinningDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spinningDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinningDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    it('should lineup all the dancers', function() {
        sinon.spy(spinningDancer, 'setPosition');
        spinningDancer.lineUp([spinningDancer],1);
        expect(spinningDancer.setPosition.called).to.be.true;
    });
  });
});

describe('swimmingDancer', function() {

  var swimmingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    swimmingDancer = new makeSwimmingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(swimmingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    var spy = sinon.spy(swimmingDancer.$node, 'effect');
    spy.withArgs('shake');
    swimmingDancer.shake = true;
    swimmingDancer.step();
    expect(swimmingDancer.$node.effect.called).to.be.true;
  });
  it('should have a step function that adds an animation class (bounce)', function() {
    sinon.spy(swimmingDancer.$node, 'addClass');
    swimmingDancer.near = true;
    swimmingDancer.step();
    expect(swimmingDancer.$node.addClass.called).to.be.true;
  });
  it('should have a step function that removes an animation class (bounce)', function() {
    sinon.spy(swimmingDancer.$node, 'removeClass');
    swimmingDancer.near = false;
    swimmingDancer.step();
    expect(swimmingDancer.$node.removeClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(swimmingDancer, 'step');
      expect(swimmingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(swimmingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(swimmingDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    it('should lineup all the dancers', function() {
        sinon.spy(swimmingDancer, 'setPosition');
        swimmingDancer.lineUp([swimmingDancer],1);
        expect(swimmingDancer.setPosition.called).to.be.true;
    });
  });
});

describe('randomDancers', function() {

  var randomDancers, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    randomDancers = new makeRandomDancers(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(randomDancers.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    var spy = sinon.spy(randomDancers.$node, 'effect');
    spy.withArgs('shake');
    randomDancers.shake = true;
    randomDancers.step();
    expect(randomDancers.$node.effect.called).to.be.true;
  });
  it('should have a step function that adds an animation class (bounce)', function() {
    sinon.spy(randomDancers.$node, 'addClass');
    randomDancers.near = true;
    randomDancers.step();
    expect(randomDancers.$node.addClass.called).to.be.true;
  });
  it('should have a step function that removes an animation class (bounce)', function() {
    sinon.spy(randomDancers.$node, 'removeClass');
    randomDancers.near = false;
    randomDancers.step();
    expect(randomDancers.$node.removeClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(randomDancers, 'step');
      expect(randomDancers.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(randomDancers.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(randomDancers.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    it('should lineup all the dancers', function() {
        sinon.spy(randomDancers, 'setPosition');
        randomDancers.lineUp([randomDancers],1);
        expect(randomDancers.setPosition.called).to.be.true;
    });
  });
});