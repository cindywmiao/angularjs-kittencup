/**
 * Created by Cindy.Wang on 1/22/17.
 */

var myApp = angular.module('myApp',[], ['$compileProvider', function ($compileProvider) {
    console.log($compileProvider);
    
    $compileProvider.directive('customTags', function () {
        return {
            restrict: 'ECAM',
            template: '<div>custom-tags-template</div>',
            replace: true,
            compile: function () {
                console.log(1);
            }
        }
    });
}]);


myApp.controller('firstController', ['$scope', function($scope) {

}]);
