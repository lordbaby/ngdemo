/**
*  Module
*
* Description
*/
angular.module('case')
.directive('appNav', ['NavData', function(NavData){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'views/home/nav.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs) {
			var vm=$scope.vm={};
			vm.data=NavData;
			console.log(vm.data);
		}
	};
}])
.directive('appBrief', ['$rootScope',function ($rootScope) {
	return {
		restrict: 'EA',
		scope:{},
		templateUrl:'views/home/brief.html',
		link: function (scope, iElement, iAttrs) {
			var vm=scope.vm={};
			$rootScope.$on('$stateChangeSuccess',function(event,toState,toParam,fromState,fromParam){
				vm.title=toState.label;
			})
		}
	};
}])