/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[], function ($filterProvider, $provide, $controllerProvider) {

    $provide.service('Data', function () {
        return [
            {
                name: 'Hello',
                age: 20,
                city: 'Shanghai'
            },
            {
                name: 'World',
                age: 21,
                city: 'Beijing'
            }
        ];
    });

    $filterProvider.register('filterAge', function () {
        return function (obj) {
            var newObj = [];

            angular.forEach(obj, function (o) {
                if (o.age > 20){
                    newObj.push(o);
                }
            });
            return newObj;
        };
    });

    $controllerProvider.register('firstController', function ($scope, Data) {
        $scope.data = Data;
    });
})
    .filter('filterCity', function () {
        return function (obj) {
            console.log(obj);
            var newObj = [];
            angular.forEach(obj, function (o) {
                if(o.city === 'Beijing'){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    });