/**
 * Created by Cindy.Wang on 1/29/17.
 */

angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {
                $scope.books = $scope.a();
            },
            controllerAs: 'bookListController',
            scope: {
              a: '&books'
            },
            template: '<div><ul><li ng-repeat="book in books">{{ book.name }}</li></ul></div>',
            replace:true

        }

    })

    .controller('firstController', ['$scope', function ($scope) {
        // console.log($scope);
        $scope.books = [
            {
                name: 'php'
            },
            {
                name: 'javascript'
            },
            {
                name: 'java'
            }
        ];

    }]);