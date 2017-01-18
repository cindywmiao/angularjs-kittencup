/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[])
    .factory('Data', function () {
        return {
            name : 'Shared Data',
            city : [
                {
                    name: 'shanghai',
                    location: '1'
                },
                {
                    name: 'beijing',
                    location: '4'
                },
                {
                    name: 'hongkong',
                    location: '3'
                }
            ]
        };
    })

    .controller('firstController', function ($scope, Data, $filter) {
        $scope.data = Data;

        var number = $filter('number')(3000);
        // console.log(number);

        var jsonString = $filter('json')($scope.data);
        // console.log(jsonString);

        $scope.checkName = function (obj) {
            console.log(obj);
            if(obj.name.indexOf('h') == -1){
                return true;
            }else{
                return false;
            }
        }

    });
