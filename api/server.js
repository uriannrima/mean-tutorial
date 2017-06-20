const express = require('express');
const bodyParser = require('body-parser');

var generateGuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Allow cors, just for test.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

// Our stateless DB. :D
var todos = [];

app.get('/api/todos', function (req, res) {
    res.json(todos);
});

app.post('/api/todos', function (req, res) {
    var todo = req.body.todo;
    todo.id = generateGuid();
    todos.push(todo);
    res.json(todo);
});

app.delete('/api/todos/:todoId', function (req, res) {
    todos = todos.filter(todo => todo.id !== req.params.todoId);
    res.sendStatus(200);
});

app.put('/api/todos', function (req, res) {
    var toUpdate = req.body.todo;
    for (var index = 0; index < todos.length; index++) {
        var todo = todos[index];
        if (todo.id === toUpdate.id) {
            todos[index] = toUpdate;
            break;
        }
    }
    res.sendStatus(200);
});

app.post('/api/todos/clear', function (req, res) {
    todos = todos.filter(todo => !todo.done);
    res.json(todos);
})

app.listen(3003, function () {
    console.log('Listening to ' + 3003);
});
