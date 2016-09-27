angular.module('case').controller('ctrl.tree.cascade', function($scope, CityData) {
    var vm = $scope.vm = {};
    vm.countries = CityData;

    vm.countryChanged = function(country) {

        _.forEach(country.provinces, function(province) {
            province.checked = country.checked;
            _.forEach(province.cities, function(city) {
                city.checked = country.checked;
            });
        })
    };

    vm.provinceChanged = function(province, country) {
        _.forEach(province.cities, function(city) {
            city.checked = province.checked;
        });
        country.checked = !!_.findWhere(country.provinces, { checked: true });
    }

    vm.cityChanged = function(city, province, country) {
        province.checked = !!_.findWhere(province.cities, { checked: true });
        country.checked = !!_.findWhere(country.provinces, { checked: true });
    }

    //判断country是否半选状态
    vm.isIntermediateCountry = function(country) {
        // 是否有任何被选中的节点
        var hasChecked = _.find(country.provinces, function(province) {
            return province.checked && _.findWhere(province.cities, { checked: true });
        });
        // 是否有任何没有选中的节点
        var hasNoChecked = _.find(country.provinces, function(province) {
            return !province.checked || _.findWhere(province.cities, { checked: false });
        });
        // 如果同时有选中状态和非选中的节点，则为中间状态
        return hasChecked && hasNoChecked;
    };
    //判断province是否半选状态
    vm.isIntermediateProvince = function(province) {
        var hasChecked = _.findWhere(province.cities, { checked: true });
        var hasNoChecked = _.findWhere(province.cities, { checked: false });

        return hasChecked && hasNoChecked;
    }
});
