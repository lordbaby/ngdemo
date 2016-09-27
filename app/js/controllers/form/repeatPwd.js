angular.module('case')
    .controller('ctrl.form.repeatPwd', ['$scope', function($scope) {
        var vm = $scope.vm = {
            show_error: false,
            show_type: "1",
            user: {}
        };

        vm.submit = function(form) {
            vm.show_error = true;
            form.$setDirty();
            if (form.$valid) {
                alert('提交成功')
            }
        }
        vm.change_show_type = function(form) {
            if (vm.show_type == 2) {
                vm.show_error = true;
            } else {
                vm.show_error = false;
            }

            vm.user = {};
            form.$setPristine();
        }
    }])
