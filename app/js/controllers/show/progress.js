/**
*  Module
*
* Description
*/
angular.module('case')
.controller('ctrl.show.progress', ['$scope', function($scope){
	
	var vm=$scope.vm={};

	vm.value=50;
	vm.style='progress-bar-info';
	vm.showLabel=true;
}]);