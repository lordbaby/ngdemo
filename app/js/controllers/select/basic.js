angular.module('case').controller('ctrl.select.basic', function($scope) {
    var vm = $scope.vm = {};

    vm.cities = [{
            province: '北京',
            code: 'bj',
            label: '北京市'
        }, {
            province: '上海',
            code: 'sh',
            label: '上海市'
        }, {
            province: '广东',
            code: 'gz',
            label: '广州市'
        }, {
            province: '广东',
            code: 'sz',
            label: '深圳市'
        }
    ];
    vm.value=vm.cities[1];
    vm.codeValue='gz';
    vm.groupbyValue='sz';
    vm.trackbyValue={code:'gz',label:'羊城'};
});
