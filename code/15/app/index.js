/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[])
    .factory('Data', function () {
        return {
            name : 'Shared Data'
        };
    })

    .controller('firstController', function ($scope, Data) {
        $scope.data = Data;
    })

    .controller('secondController', function ($scope, Data) {
        $scope.data = Data;
    });
