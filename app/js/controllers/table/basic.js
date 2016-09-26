angular.module('case').controller('ctrl.table.basic', function ($scope) {
  var vm = $scope.vm = {};
  vm.items=[];

  vm.checkAll=function(checked){
  	angular.forEach(vm.items,function(item){
  		item.$checked=checked;
  	});
  }

  vm.age=function(b){
  	return 21;
  }
  vm.selections=function(){
  	return _.where(vm.items,{$checked:true});
  }

  var MAX_NUM=10;

  function rand(min,max){
  	return min+Math.round(Math.random()*(max-min));
  }

  for (var i = 0; i < MAX_NUM; i++) {
  	var id=rand(0,MAX_NUM);
  	vm.items.push({
  		id:i+1,
  		name:'Name'+i,
  		followers:rand(0,100*1000*1000),
  		birthday:'2016-6-18',
  		income:rand(1000,100000)
  	})
  }
});
