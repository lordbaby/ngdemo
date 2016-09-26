angular.module('case').controller('ctrl.input.file', function ($scope,$fileUploader) {
  var vm = $scope.vm = {};
  vm.uploader=$fileUploader.create({
  	scope:$scope,
  	url:'/api/upload',
  	autoUpload:true,
  	formData:[
  		{key:'value'}
  	],
  	filters:[
  		function(item){
  			console.log(item);
  			return true;
  		}
  	]
  		
  	
  })
});
