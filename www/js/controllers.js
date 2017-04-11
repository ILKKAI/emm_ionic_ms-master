angular.module('starter.controllers', [])
	.controller('HomeCtrl', function($scope) {
	})
	.controller('LoginCtrl', function($scope,$state) {
		$scope.loginTo=function(){
			$state.go('home')
		};
		$scope.findPassword=function(){
			$state.go('find-password')
		}
	})
	.controller('FindPasswordCtrl', function($scope) {

	})




;
