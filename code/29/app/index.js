/**
 * Created by Cindy.Wang on 1/29/17.
 */

var myApp = angular.module('myApp', [])
    .directive('bookList', function () {
        return {
            restrict: 'EACM',
            controller : function ($scope) {
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

                this.addBook = function () {
                    // $scope.books.append({name: 'c++'});
                    // // $scope.$apply(function () {
                    // //
                    // // });
                    alert('test');
                };
            },
            controllerAs: 'bookListController',
            template : '<ul><li ng-repeat="book in books">{{ book.name }}</li></ul>',
            replace: true,
            link: function (scope, iElement, iAttr, bookListController) {
                iElement.on('click', bookListController.addBook)
            }
        };
    })

    .controller('firstController', ['$scope', function ($scope) {
        // $scope.books = [
        //     {
        //         name: 'php'
        //     },
        //     {
        //         name: 'javascript'
        //     },
        //     {
        //         name: 'java'
        //     }
        // ];
    }]);
