var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var _ = require('underscore');
var todos = [];
var Idincrement = 1;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/frontend'));

//GET request for displaying all todos with queryParams
app.get('/todos', function(req, res){
    var queryParams = req.query;
    var matchedTodo = todos;
    if(queryParams.hasOwnProperty('plays') && queryParams.plays.length > 0 && queryParams.plays == "false"){
        matchedTodo = _.where(matchedTodo,{"plays":false});
        res.json(matchedTodo);
    }else if(queryParams.hasOwnProperty('plays') && queryParams.plays.length > 0 && queryParams.plays == "true"){
        matchedTodo = _.where(matchedTodo,{"plays":true});
        res.json(matchedTodo);
    }else{
        console.log('no query param passed...')
        res.json(todos);
    }
});

//GET request for displaying Todo with id
app.get('/todos/:id', function(req,res){
    var todoId = parseInt(req.params.id);
    var matchedTodo = _.findWhere(todos,{id:todoId});
    if (!matchedTodo){
        return res.status(404).send('id out of bound...');
    }
    res.json(matchedTodo);
});

// POST request to add todo
app.post('/todos', function(req, res){
    if(!_.isEmpty(todos)){
        var body = req.body;
        body.id = Idincrement++;
        todos.push(body);
        res.json(todos);
    }else{
        Idincrement = 1;
        var body = req.body;
        body.id = Idincrement++;
        todos.push(body);
        res.json(todos);
    }
});

//PUT request to update the todo by id
app.put('/todos/:id', function(req, res){
    var todoId1 = parseInt(req.params.id);
    var matchedTodo1 = _.findWhere(todos,{id:todoId1});
    var body1 = req.body;
    _.extend(matchedTodo1,body1);
    res.json(todos);
});

//DELETE request to delete todo
app.delete('/todos/:id', function(req, res){
    var todoId2 = parseInt(req.params.id);
    var matchedTodo2 = _.findWhere(todos,{id:todoId2});
    todos = _.without(todos,matchedTodo2);
    res.json(todos);
});

app.listen(PORT, function(){
    console.log('Express server running and listenning at Port '+PORT+':');
});