(function(){
    var updatetodoController = function($scope, $routeParams, $http){
        var req = {
            method:'GET',
            url:'https://amul-todo-api.herokuapp.com/todos'
        }
        $http(req).then(function(todos){
            $scope.results = todos.data;
        },function(){
            console.log('something is wrong in GET request in post page...');
        });
        $scope.update = function(){
            if($scope.plays === true){
                var data = {
                    "name":$scope.name,
                    "plays":true,
                    "id":$scope.todo_id
                }
            }else{
                var data = {
                    "name":$scope.name,
                    "id":$scope.todo_id
                }
            }
            var req1 = {
                method:'PUT',
                url:'https://amul-todo-api.herokuapp.com/todos/' + $scope.todo_id,
                data:data
            }
            $http(req1).then(function(todos){
                $scope.results = todos.data;
            }, function(){
                console.log('error in update request...')
            });
        }    
    }
    
    updatetodoController.$inject = ['$scope', '$routeParams', '$http'];
    
    angular.module('TodoApi').controller('updatetodoController',updatetodoController);
    
}());