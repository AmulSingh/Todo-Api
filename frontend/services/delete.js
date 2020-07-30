(function(){
    var deleteService = function(){
        this.deleteTodo = function(){
            return alert('call to service executed...')
        }
    }
    
    angular.module('TodoApi').service('deleteService',deleteService);
    
}());