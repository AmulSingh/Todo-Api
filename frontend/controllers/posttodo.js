(function(){
    var posttodoController = function($scope, $http){
        var req = {
            method:'GET',
            url:'https://amul-todo-api.herokuapp.com/todos'
        }
        $http(req).then(function(todos){
            $scope.results = todos.data;
        },function(){
            console.log('something is wrong in GET request in post page...');
        });
        $scope.post = function(){
            if($scope.plays === true){
                $scope.plays = true;
            }else{
                $scope.plays = false;
            }
            var req = {
                method:'POST',
                url:'https://amul-todo-api.herokuapp.com/todos',
                data:{
                    "name":$scope.name,
                    "plays":$scope.plays
                }
            }
            return $http(req).then(function(todos){
                $scope.results = todos.data;
                $scope.name = "";
                $scope.plays = false;
            },function(){
                console.log('something is wrong in POST request...');
            });
        }
    }
    
    posttodoController.$inject = ['$scope', '$http'];
    
    angular.module('TodoApi').controller('posttodoController',posttodoController);
    
}());