/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('firstController', ['$scope', function($scope) {
    $scope.name = 'Hola!';

    $scope.count = 0;

    $scope.$watch('name', function () {
        ++$scope.count;
        if($scope.count > 30){
            $scope.name = 'Over 30';
        }
    });

    // $scope.data = {
    //     name: 'Hello',
    //     count: 20
    // };
    //
    // $scope.$watch('data', function () {
    //
    // }, true);

}]);
