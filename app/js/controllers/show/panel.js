angular.module('case')
.controller('ctrl.show.panel', ['$scope', function($scope){
	
	var vm=$scope.vm={};
	vm.style="panel-primary"
	vm.hidden=false;
	vm.collapsed=true;
	vm.content='可折叠的内容部分';
	vm.title='点击右侧图标展开折叠'
}]);