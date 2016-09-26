angular.module('case')
    .config(
        function($stateProvider, $urlRouterProvider, NavData) {

            $urlRouterProvider.otherwise('/notFound');
            $stateProvider.state('notFound', {
                url: '/notFound',
                controller: 'ctrl.notFound',
                templateUrl: 'views/home/notFound.html'
            });

            var states = {};
            _.each(NavData, function(group) {
                _.each(group.items, function(item) {
                    var paths = item.state.split(/\./g);
                    var currentPath = '';
                    _.each(paths, function(path) {
                        currentPath += path;
                        states[currentPath] = item;
                        currentPath += '.';
                    });
                });
            });
            //批量注册路由

            _.each(states, function(item, state) {
                var path = state.replace(/\./g, '/');
                var lastState = state.match(/(\w+)$/)[0];

                $stateProvider.state(state, {
                    url: '/' + lastState,
                    controller: 'ctrl.' + state,
                    templateUrl: 'views/' + path + '.html',
                    label: item.label
                });
            });
        }
    )
