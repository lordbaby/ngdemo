angular.module('case').controller('ctrl.thirdparty.ueditor', function ($scope,$sce) {
  var vm = $scope.vm = {};

  $scope.editorConfig={
  	focus:true
  }
  $scope.$watch('content',function(){
  	$scope.html=$sce.trustAsHtml($scope.content);
  })
});
