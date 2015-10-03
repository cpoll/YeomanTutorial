'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	  
	  
    $scope.todos = localStorageService.get('todos') || ['Todo: Make more todos!'];
	
	$scope.$watch('todos', function () {
	  localStorageService.set('todos', $scope.todos);
	}, true);
	
	$scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};
	
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
  });
