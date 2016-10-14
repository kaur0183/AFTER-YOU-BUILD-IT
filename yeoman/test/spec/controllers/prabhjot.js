'use strict';

describe('Controller: PrabhjotCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var PrabhjotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrabhjotCtrl = $controller('PrabhjotCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrabhjotCtrl.awesomeThings.length).toBe(3);
  });
});
