const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var db;

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

app.get('/api/todos', function (req, res) {
    db.collection('todos').find({}).toArray((err, records) => {
        res.json(records);
    });
});

app.post('/api/todos', function (req, res) {
    var todo = req.body.todo;
    db.collection('todos').insertOne({
        text: todo.text,
        done: todo.done
    }).then(result => {
        res.json(result.ops[0]);
    });
});

app.delete('/api/todos/:todoId', function (req, res) {
    var _id = new ObjectId(req.params.todoId);
    db.collection('todos').deleteOne({ _id }).then(result => {
        res.sendStatus(200);
    });

});

app.put('/api/todos', function (req, res) {
    var todo = req.body.todo;
    const _id = new ObjectId(todo._id);
    delete todo._id;
    db.collection('todos').findAndModify({ _id }, [], { $set: todo }, { new: true, upsert: true }).then(result => {
        res.json(result.value);
    });
});

app.post('/api/todos/clear', function (req, res) {
    todos = todos.filter(todo => !todo.done);
    res.json(todos);
})

MongoClient.connect('mongodb://localhost:27017/mean-app', function (err, database) {
    if (err) throw err;
    db = database;
    app.listen(3003, function () {
        console.log('Listening to ' + 3003);
    });
});
