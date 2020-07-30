(function(){
    var posttodoController = function($scope, $http, deleteService){
        var req = {
            method:'GET',
            //url:'https://amul-todo-api.herokuapp.com/todos'
            url:'http://localhost:3000/todos'
        }
        $http(req).then(function(todos){
            $scope.results = todos.data;
        },function(){
            console.log('something is wrong in GET request in post page...');
        });
        $scope.post = function(){
            try{
                if($scope.name.length > 0){
                    if($scope.plays === true){
                        $scope.plays = true;
                    }else{
                        $scope.plays = false;
                    }
                    var req = {
                        method:'POST',
                        //url:'https://amul-todo-api.herokuapp.com/todos',
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
                }else{
                    alert('Name cannot be empty!');
                }
            }catch(e){
                console.log(e.message);
                alert('Name cannot be empty!');
            }
        }
        $scope.delete = function(){
            deleteService.deleteTodo();
        }
    }
    
    posttodoController.$inject = ['$scope', '$http', 'deleteService'];
    
    angular.module('TodoApi').controller('posttodoController',posttodoController);
    
}());