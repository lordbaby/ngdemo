/**
 * 多个邮箱验证 以；;分割
 */
angular.module('case')
    .directive('multipleEmail', [function() {
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
                   var EMAILS_REGEXP = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
                   var customValidator = function (value) {
                        var validity = ctrl.$isEmpty(value) || EMAILS_REGEXP.test(value)
                        ctrl.$setValidity("multipleEmail", validity);
                        return validity ? value : undefined;
                    };
                    ctrl.$formatters.push(customValidator);
                    ctrl.$parsers.push(customValidator);
                }
            }
        };
    }]);
