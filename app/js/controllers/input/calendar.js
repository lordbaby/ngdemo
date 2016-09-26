angular.module('case').controller('ctrl.input.calendar', function($scope) {
    var vm = $scope.vm = {};

    vm.today = function() {
        vm.calendar = new Date();
    }
    vm.today();

    //清除当前日期
    vm.clear = function() {
        vm.calendar = null;
    }

    //不允许选周末
    vm.disabled = function(date,mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    }

    //自定义选项
    vm.dateOptions = {
        startingDay: 1,
        maxDate: new Date(2016, 10, 07),
        minDate: new Date(),
        formatYear:'yy'
            //formatDayTitle: 'yyyy MMMM'
    }

    //最小日期开关
    vm.toggleMin = function() {
        vm.dateOptions.minDate = vm.dateOptions.minDate ? null : new Date();
    }
    vm.toggleMin();


    //弹出式日历触发函数
    vm.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        vm.opened = true;
    }

    vm.setDate = function(y, m, d) {
        vm.calendar = new Date(y, m, d);
    }




    //输出格式控制
    vm.formats = ['yyyy-MMMM-dd', 'yyyy/MM/dd', 'yyyy.MM.dd', 'shortDate'];
    vm.format = vm.formats[1];

});
