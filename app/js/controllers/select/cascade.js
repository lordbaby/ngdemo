angular.module('case').controller('ctrl.select.cascade', function($scope,CityData) {
    var vm = $scope.vm = {};
    vm.countries=CityData;

    $scope.$watch('vm.country',function(country){
        console.log(country);
        vm.province=null;
    })
    $scope.$watch('vm.province',function(province){
        vm.city=null;
    })
});
