'use strict';


/*
 * Main Controller
 */
angular.module('MyApp')
    .controller('MainCtrl', ['$scope', 'UserData',
        function($scope, UserData) {
            $scope.currentView = "views/login.html";
            $scope.user = {};

            $scope.submitForm = function(){
                UserData.postFormData($scope.user);
                $scope.currentView = 'views/searchProvider.html'
            }
            $scope.sendProvider = function(provider) {
                $scope.doctors = [];
                $scope.doctors.push({
                    firstName : provider.first_name,
                    lastName  : provider.last_name
                })
                UserData.postProvider($scope.doctors);
            }
                UserData.getProviderData().then(function(data) {
                    $scope.providers = data.data;
                });

        }

    ]);
