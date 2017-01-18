/**
 * Created by Cindy.Wang on 1/17/17.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('CartController', ['$scope', function($scope) {
    $scope.cart = [
        {
            id: 1000,
            name: 'iphone5s',
            quantity: 3,
            price: 4300
        },
        {
            id: 3000,
            name: 'iphone5',
            quantity: 30,
            price: 3300
        },
        {
            id: 232,
            name: 'imac',
            quantity: 3,
            price: 14300
        },
        {
            id: 4000,
            name: 'ipad',
            quantity: 3,
            price: 6300
        }
    ];

    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.quantity * item.price;
        });
        return total;
    };

    $scope.totalQuality = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += parseInt(item.quantity);
        });
        return total;
    };

    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if(id === item.id) {
                index = key;
                return index;
            }
        });
        return index;
    };

    $scope.remove = function (id) {
        var index = findIndex(id);
        if(index != -1){
            $scope.cart.splice(index, 1);
        }
    };
    
    $scope.add = function (id) {
        var index = findIndex(id);
        if(index != -1){
            ++$scope.cart[index].quantity;
        }
    };

    $scope.reduce = function (id) {
        var index = findIndex(id);
        if(index != -1 ){
            if($scope.cart[index].quantity > 1){
                --$scope.cart[index].quantity;
            } else{
                var returnKey = confirm('Are you sure?');
                if(returnKey) {
                    $scope.cart.splice(index, 1);
                }
            }
        }
    }

    $scope.$watch('cart', function (newValue, oldValue) {
        angular.forEach(newValue, function (item, key) {
            if(item.quantity < 1){
                var returnKey = confirm('Are you sure?');
                if(returnKey) {
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
                return;
            }
        })
    }, true);

}]);
