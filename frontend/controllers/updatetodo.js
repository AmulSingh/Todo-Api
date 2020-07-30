(function(){
    var updatetodoController = function($scope, $routeParams, $http, deleteService){
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
        $scope.update = function(){
            try{
                if($scope.plays === true && $scope.name.length > 0 && $scope.todo_id != 0){
                    var data2 = {
                        "name":$scope.name,
                        "plays":true
                    }
                }else if($scope.plays === false && $scope.name.length > 0 && $scope.todo_id != 0){
                    var data2 = {
                        "name":$scope.name,
                        "plays":false
                    }
                }else{
                    console.log('no values passed...');
                    //return alert('no values passed!');
                }
                var req1 = {
                    method:'PUT',
                    //url:'https://amul-todo-api.herokuapp.com/todos/' + $scope.todo_id,
                    url:'http://localhost:3000/todos/' + $scope.todo_id,
                    data:data2
                }
                $http(req1).then(function(todos){
                    $scope.results = todos.data;
                    console.log('executing fine')
                    console.log(typeof($scope.todo_id));
                }, function(){
                    console.log('error in update request...')
                });
            }catch(e){
                console.log(e.message);
            }
        }  
        $scope.delete = function(){
            deleteService.deleteTodo();
        }
    }
    
    updatetodoController.$inject = ['$scope', '$routeParams', '$http', 'deleteService'];
    
    angular.module('TodoApi').controller('updatetodoController',updatetodoController);
    
}());