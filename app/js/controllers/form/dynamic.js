angular.module('case').controller('ctrl.form.dynamic', function($scope) {

    $scope.formItems = [{
        name: "商品名称",
        type: "text"
    }, {
        name: "配送区域",
        type: "region"
    }, {
        name: "适用人群",
        type: "checkbox",
        items: [{
            name: "小孩子"
        }, {
            name: "中年人",
            checked: true
        }, {
            name: "老年人"
        }]
    }, {
        name: "适用人群",
        type: "select",
        items: [{
            name: "小孩子"
        }, {
            name: "中年人",
        }, {
            name: "老年人"
        }]
    }, {
        name: "颜色",
        type: "color",
        items: [{
            name: "红",
            value: "#ff0000"
        }, {
            name: "绿",
            value: "#00ff00"
        }, {
            name: "蓝",
            value: "#0000ff"
        }]
    }, {
        name: "尺码",
        type: "size",
        items: [{
            name: "XXL",
            value: "XXL"
        }, {
            name: "XL",
            value: "XL"
        }, {
            name: "L",
            value: "L"
        }, {
            name: "M",
            value: "M"
        }, {
            name: "S",
            value: "S"
        }]
    }];



    var regions = [
        { name: "a", code: "0" },
        { name: "b", code: "1" },
        { name: "c", code: "2" },
        { name: "d", code: "3" },

        { name: "e", code: "4", parent: "1" },
        { name: "f", code: "5", parent: "1" },

        { name: "g", code: "6", parent: "4" },
        { name: "h", code: "7", parent: "4" },

        { name: "i", code: "8", parent: "7" },
        { name: "j", code: "9", parent: "7" }
    ];

    $scope.regions = [];

    $scope.regions[0] = regions.filter(function(it) {
        return it.parent == null;
    });

    $scope.selectedRegionChange = function(formItem, index) {
        var item = formItem.selectedRegions[index];
        var next = regions.filter(function(it) {
            return it.parent == item.code;
        });

        if (next.length > 0) {
            $scope.regions[index + 1] = next;
        } else {
            $scope.regions.splice(index + 1, $scope.regions.length - index);
        }
    };

    $scope.generateTable = function() {
        $scope.priceTable = [];

        $scope.formItems[4].items.forEach(function(color) {
            if (color.$checked) {
                var counter = 0;
                $scope.formItems[5].items.forEach(function(size) {
                    if (size.$checked) {
                        $scope.priceTable.push({ color: color.newName, size: size.newName, $index: counter });
                        counter++;
                    }
                });
                if (counter > 0) {
                    $scope.priceTable[$scope.priceTable.length - counter].$rowspan = counter;
                }
            }
        });
    };
});
