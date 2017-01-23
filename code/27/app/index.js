/**
 * Created by Cindy.Wang on 1/22/17.
 */

var myApp = angular.module('myApp',[])
    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            templateUrl: 'tmp/other.html',
            replace: true,
            compile: function () {
                console.log(1);
            }
        }
    })
    
    .directive('customTags2', function () {
        return {
            restrict: 'ECAM',
            templateUrl: 'customTags2',
            replace: true,
            compile: function () {
                console.log(1);
            }
        }
    })

    .controller('firstController', ['$scope', function ($scope) {
        $scope.name = 'Hello World';
    }]);
