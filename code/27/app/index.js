/**
 * Created by Cindy.Wang on 1/22/17.
 */

var myApp = angular.module('myApp',[])
    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            template: '<div>New <span ng-transclude></span></div>',
            replace: true,
            transclude: true,
            compile: function () {
                console.log(1);
            }
        }
    })

    .controller('firstController', ['$scope', function ($scope) {
        $scope.name = 'Hello World';
    }]);
