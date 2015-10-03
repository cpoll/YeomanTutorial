'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTutorialApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //vars
  
	it('should have the correct number of items to start', function () {
	  expect(scope.todos.length).toBe(1);
	});
	
	it('should add items to the list', function () {
		var originalCount = scope.todos.length;
		scope.todo = 'Test 1';
		scope.addTodo();
		expect(scope.todos.length).toBe(originalCount + 1);
    });
	
	it('should add then remove an item from the list', function () {
		var originalCount = scope.todos.length;
	  scope.todo = 'Test 1';
	  scope.addTodo();
	  scope.removeTodo(0);
	  expect(scope.todos.length).toBe(originalCount);
});
});
