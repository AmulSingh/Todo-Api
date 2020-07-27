var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var _ = require('underscore');
var todos = [];
var Idincrement = 1;

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('hello world!');
});

app.get('/todos', function(req, res){
    res.json(todos);
});

app.get('/todos/:id', function(req,res){
    var todoId = parseInt(req.params.id);
    var matchedTodo = _.findWhere(todos,{id:todoId});
    if (!matchedTodo){
        return res.status(404).send('id out of bound...');
    }
    res.json(matchedTodo);
});

app.post('/todos',function(req, res){
    var body = req.body;
    body.id = Idincrement++;
    console.log('body value :'+body);
    todos.push(body);
    console.log('todos value :'+todos);
    res.json(todos);
});

app.listen(PORT, function(){
    console.log('Express server running and listenning at Port '+PORT+':');
});