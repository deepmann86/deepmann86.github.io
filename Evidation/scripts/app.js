'use strict';

/*
 * Define app and dependencies
 */
angular.module('MyApp', [
    'ui.router',
    'ui.bootstrap'
]);

// Set configuration for starting state
angular.module('MyApp').config(function($stateProvider) {
    $stateProvider
        .state('main', {
            url: '',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'

        });
});


angular.module('MyApp').run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

});
