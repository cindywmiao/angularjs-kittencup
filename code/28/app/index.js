/**
 * Created by Cindy.Wang on 1/29/17.
 */

var i = 0;

var myApp = angular.module('myApp',[])
    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            template: '<div>{{ user.name }}</div>',
            replace: true,
            compile: function (tElement, tAttr, transclude) {
                // return function (tElement, tAttr, transclude) {
                //     console.log(tElement);
                //     console.log(tAttr);
                //     console.log(transclude);
                //     console.log('custom tag compile');
                // }

                tElement.append(angular.element('<div>{{ user.name }} {{ user.count }}</div>'))

                return {
                    pre: function preLink(scope, iElement, iAttr, controller) {
                        console.log("custom tag1...preLink");
                    },
                    post: function postLink(scope, iElement, iAttr, controller) {
                        iElement.on('click', function () {
                            scope.$apply(function () {
                                scope.user.name = 'click after';
                                scope.user.count = ++i;
                            });
                        });
                        console.log("custom tag1...postLink");
                    }
                }
            }
        };
    })

    .directive('customTags2', function () {
        return {
            restrict: 'ECAM',
            replace: true,
            compile: function (tElement, tAttr, transclude) {

                return {
                    pre: function preLink() {
                        console.log("custom tag2...preLink");
                    },
                    post: function postLink() {
                        console.log("custom tag2...postLink");
                    }
                }

            },
            link: function () {

            }
        };
    })
    .controller('firstController', ['$scope', function ($scope) {

        $scope.users = [
            {
                id: 10,
                name: 'Hello'
            },
            {
                id: 20,
                name: 'World'
            }
        ]
    }]);