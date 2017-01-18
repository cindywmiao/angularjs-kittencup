/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('firstController', ['$scope', function($scope) {
    $scope.name = 'Hola!';

    $scope.age = 20;
}]);
