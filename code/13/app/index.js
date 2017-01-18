/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[], function ($provide) {
    $provide.provider('CustomService', function () {
        this.$get = function () {
            return {
                message : 'CustomService Message'
            }
        }
    });

    $provide.provider('CustomService2', function () {
        this.$get = function () {
            return {
                message : 'CustomService2 Message'
            }
        }
    });

});

myApp.controller('firstController', function($scope, CustomService, CustomService2) {
    $scope.name = 'Hola!';
    console.log(CustomService);
    console.log(CustomService2);
});
