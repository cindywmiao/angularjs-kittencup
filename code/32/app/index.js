angular.module('myApp', [])
// 数据
    .factory('Data', function () {
        return [
            {
                title: 'no1',
                content: 'no1-content'
            },
            {
                title: 'no2',
                content: 'no2-content'
            },
            {
                title: 'no3',
                content: 'no3-content'
            }
        ];
    })
    // 控制器
    .controller('firstController', ['$scope','Data',function ($scope,Data) {
        $scope.data = Data;
    }])

    .directive('kittencupGroup',function(){
        return {
            restrict:'E',
            replace:true,
            template:'<div class="panel-group" ng-transclude></div>',
            transclude:true,
            controllerAs:'kittencupGroupController',
            controller: function ($scope) {
                this.group = [];

                this.closeOtherCollapse = function (nowScope) {
                    console.log('here');
                    angular.forEach(this.group, function (scope) {
                       if(scope !== nowScope){
                           scope.isOpen = false;
                       }
                    });
                };
            }
        }
    })

    .directive('kittencupCollapse',function(){
        return {
            restrict:'E',
            replace:true,
            templateUrl:'app/tmp/kittencupCollapse.html',
            required: '^kittencupGroup',
            scope: {
                heading: '@' //表示找@heading
            },
            link: function (scope, element, attrs, kittencupGroupController) {
                scope.isOpen = true;

                scope.changeOpen = function () {
                    scope.isOpen = !scope.isOpen;

                    kittencupGroupController.closeOtherCollapse(scope);
                };

                kittencupGroupController.group.push(scope);
            },
            transclude: true
        }
    });