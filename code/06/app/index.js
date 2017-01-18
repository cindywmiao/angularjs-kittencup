/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('firstController', ['$scope', function($scope) {
    $scope.date = new Date();


    // setInterval(function () {
    //     $scope.date = new Date();
    // }, 1000)

    
    setInterval(function () {
        $scope.$apply(function () {
            $scope.date = new Date();
        })
    }, 1000)
}]);
