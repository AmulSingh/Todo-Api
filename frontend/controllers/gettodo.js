(function(){
    var gettodoController = function($scope, $http, deleteService){
        var req = {
            method:'GET',
            url:'https://amul-todo-api.herokuapp.com/todos'
            //url:'http://localhost:3000/todos'
        }
        $http(req).then(function(todos){
            $scope.results = todos.data;
        },function(){
            console.log('something is wrong in GET request...');
        });
        $scope.getBySearch = function(){
            try{
                var req1 = {
                    method:'GET',
                    url:'https://amul-todo-api.herokuapp.com/todos',
                    //url:'http://localhost:3000/todos',
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
            }catch(e){
                console.log(e);
            }
        }
        $scope.delete = function(res){
            $scope.results = deleteService.deleteTodo(res);
            var req2 = {
                method:'GET',
                url:'https://amul-todo-api.herokuapp.com/todos'
                //url:'http://localhost:3000/todos'
            }
            $http(req2).then(function(todos){
                $scope.results = todos.data;
            },function(){
                console.log('something is wrong in DELETE request in get page...');
            });
        }
    }
    
    gettodoController.$inject = ['$scope', '$http', 'deleteService'];
    
    angular.module('TodoApi').controller('gettodoController',gettodoController);
    
}());