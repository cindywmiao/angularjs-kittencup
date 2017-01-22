/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[], function(){

})

.factory('CustomerService', function ($window) {
    return $window;
})

.controller('firstController', function ($scope, CustomerService) {
    console.log(CustomerService);
})

.controller('secondeController', ['$scope', '$filter', function (a, b) {
    // console.log(a);
    // console.log(b);
    // console.log(b('json')([1,2,3,4,5]));

}]);

myApp.controller('otherController', ['$scope', function($scope) {
    console.log($scope);
}]);
