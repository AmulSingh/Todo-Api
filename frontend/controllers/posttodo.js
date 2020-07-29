(function(){
    var posttodoController = function($scope, $http){
        var req = {
            method:'GET',
            url:'http://localhost:3000/todos'
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
                url:'http://localhost:3000/todos',
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