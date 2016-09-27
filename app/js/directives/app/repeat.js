angular.module('case')
    .directive('repeatPwd', [function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, ctrl) {
                if (ctrl) {
                    var otherInput = iElm.inheritedData('$formController')[iAttrs.repeatPwd];
                    //var otherInput=angular.element('input[name='+iAttrs.repeatPwd+']');
                    console.log(otherInput)
                    var repeatValidator = function(value) {
                        var validity = value === otherInput.$viewValue;
                        ctrl.$setValidity('repeatPwd', validity);
                        return validity ? value : undefined;
                    }

                    ctrl.$parsers.push(repeatValidator);
                    ctrl.$formatters.push(repeatValidator);

                    otherInput.$parsers.push(function(value) {
                        ctrl.$setValidity('repeatPwd', value === ctrl.$viewValue);
                        return value;
                    })
                }
            }
        };
    }]);
