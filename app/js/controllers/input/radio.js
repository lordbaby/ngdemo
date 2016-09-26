angular.module('case').controller('ctrl.input.radio', function ($scope) {
  var vm = $scope.vm = {};
  vm.values=[
  	{code:'A',age:30},
  	{code:'B',age:20},
  	{code:'C',age:40}
  ];
  vm.selection=vm.values[1];
});
