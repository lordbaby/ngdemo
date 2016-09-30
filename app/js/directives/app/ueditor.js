angular.module('case').directive('ueditor', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {
		 	config:'='
		 }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		 require: '?ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		 template: '<script name="content" type="text/plain" ng-transclude></script>',
		// templateUrl: '',
		 replace: true,
		 transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, ngModel) {
			var editor=new UE.ui.Editor($scope.config||{});
			editor.render(iElm[0]);

			if(ngModel){
				ngModel.$render=function(){
					try{
						editor.setContent(ngModel.$viewValue);
					}catch(e){}
				}

				editor.addListener('contentChange',function(){
					setTimeout(function(){
						$scope.$apply(function(){
							ngModel.$setViewValue(editor.getContent());
						})
					})
				})
			}
		}
	};
}]);