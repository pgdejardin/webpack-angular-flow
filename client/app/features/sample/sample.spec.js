'use strict';

import sample from './index';

describe("A suite", function() {

  let $controller;

  beforeEach(angular.mock.module(sample));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("contains spec with another expectation", () => {
    expect(true).toBe(true);
  });

  it('Greeting shoul be initialized with a msg', () => {
    let ctrl = $controller('SampleController');
    expect(ctrl.greeting).toBe('Welcome to the sample');
  });

});
