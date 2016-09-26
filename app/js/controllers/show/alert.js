/**
*  Module
*
* Description
*/
angular.module('case')
.controller('ctrl.show.alert', ['$scope', function($scope){
	
	var vm=$scope.vm={};
	vm.types=[
		'alert-success',
		'alert-info',
		'alert-warning',
		'alert-danger'
	];
	vm.alerts=[
		{type:'alert-success',msg:'操作成功，请继续下一步'},
		{type:'alert-danger',msg:'操作失败，修改内容并尝试重新提交'},		
	]
	vm.closeAlert=function(index){
		vm.alerts.splice(index,1);
	}
	vm.addAlert=function(type,msg){
		if(!type||!msg){
			vm.alerts.push({
				type:'alert-warning',
				msg:'类型和内容不能为空'
			})
		}else{
			vm.alerts.push({
				type:type,
				msg:msg
			})
		}
	}
}]);