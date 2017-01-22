/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[], function(){

})

.controller('firstController', function ($scope) {
    $scope.status = false;

    $scope.changeStatus = function ($event) {
        // console.log(event.target);
        $scope.status = !$scope.status;
        angular.element(event.target).html($scope.status)

    };

    $scope.defaultStyle = {
        color:'red',
        'margin-top':'50px'
    };

    $scope.src = 'https://angular.io/resources/images/logos/angular2/angular.svg';
});