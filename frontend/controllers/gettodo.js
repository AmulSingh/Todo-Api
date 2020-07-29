(function(){
    var gettodoController = function($scope, $http){
        var req = {
            method:'GET',
            url:'https://amul-todo-api.herokuapp.com/todos'
        }
        $http(req).then(function(todos){
            $scope.results = todos.data;
        },function(){
            console.log('something is wrong in GET request...');
        });
        $scope.getBySearch = function(){
            var req1 = {
                method:'GET',
                url:'https://amul-todo-api.herokuapp.com/todos',
                params:{
                    'plays':$scope.search
                }
            }
            $http(req1).then(function(todos){
                $scope.results = todos.data;
                $scope.search = "";
            },function(){
                console.log('something is wrong in GET request with query params...');
            });
        }
    }
    
    gettodoController.$inject = ['$scope', '$http'];
    
    angular.module('TodoApi').controller('gettodoController',gettodoController);
    
}());