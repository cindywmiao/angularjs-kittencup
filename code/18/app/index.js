/**
 * Created by Cindy.Wang on 1/16/17.
 */

var myApp = angular.module('myApp',[])
    .service('productData', function () {
        return [
            {
                id: 1000,
                name: 'iphone5s',
                price: 4300
            },
            {
                id: 3000,
                name: 'iphone5',
                price: 3300
            },
            {
                id: 232,
                name: 'imac',
                price: 14300
            },
            {
                id: 4000,
                name: 'ipad',
                price: 6300
            }
        ];
    })

    .controller('productController', function ($scope, productData) {
        $scope.productData = productData;

        $scope.orderType = 'id';

        $scope.order = '-';
        
        $scope.changeOrder = function (type) {
            $scope.orderType = type;
            if($scope.order === ''){
                $scope.order = '-';
            }else{
                $scope.order = '';
            }
        };
    });
