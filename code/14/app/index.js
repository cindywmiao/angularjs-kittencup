/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[], function ($provide) {
    // $provide.provider('CustomService', function () {
    //     this.$get = function () {
    //         return {
    //             message : 'CustomService Message'
    //         }
    //     }
    // });

    $provide.factory('CustomFactory', function () {
        return 'Hello World';
    });

    // the return value must be an object
    $provide.service('CustomService', function () {
       return [4,5,6,7];
    });

});

myApp.controller('firstController', function($scope, CustomService, CustomFactory) {
    $scope.name = 'Hola!';
    console.log(CustomService);
    console.log(CustomFactory);
});
