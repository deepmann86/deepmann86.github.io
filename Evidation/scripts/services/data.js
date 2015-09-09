'use strict';

/*
 * Service to fetch mock data from file
 */

angular.module('MyApp')
    .service('UserData', ['$http',
        function($http) {
            return {
                postFormData: function(user) {
                    return $http({
                        method : 'POST',
                        url    :  "resources/details.json",
                        data   : user
                    }).success(function(data) {
                        console.log(data);
                    });
                },
                postProvider: function(provider) {
                    return $http({
                        method : 'POST',
                        url    :  "resources/doctors.json",
                        data   : provider
                    }).success(function(data) {
                        console.log(data);
                    });
                },
                getProviderData: function() {
                    return $http({
                        method : 'GET',
                        url    :  "resources/provider.json"
                    }).success(function(data) {
                        //console.log(data);
                    });
                }
            };
        }
    ]);