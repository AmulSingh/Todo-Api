(function(){
    var deleteService = function($http){
        this.deleteTodo = function(res){
            try{
                var request = {
                    method:'DELETE',
                    url:'https://amul-todo-api.herokuapp.com/todos/' + res.id,
                    //url:'http://localhost:3000/todos/' + res.id
                }
                $http(request).then(function(todos){
                    return todos.data;
                }, function(){
                    return console.log('error in delete request...')
                });
            }catch(e){
                return console.log(e.message)
            }
        }
    }
    
    deleteService.$inject = ['$http'];
    
    angular.module('TodoApi').service('deleteService',deleteService);
    
}());