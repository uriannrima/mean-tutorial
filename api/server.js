const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

consign({
    cwd: './api'
})
    .include('database')
    .then('repositories')
    .then('controllers')
    .then('routes')
    .into(app);


var api = express.Router().route('/todos');

// Allow cors, just for test.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

var getAllTodos = function (req, res) {
    app.db.collection('todos').find({}).toArray().then(records => {
        res.json(records);
    });
}

api.get(getAllTodos);

api.post(function (req, res) {
    var todo = req.body.todo;
    app.db.collection('todos').insertOne({
        text: todo.text,
        done: todo.done
    }).then(result => {
        res.json(result.ops[0]);
    });
});

api.delete('/:todoId', function (req, res) {
    var _id = new ObjectId(req.params.todoId);
    app.db.collection('todos').deleteOne({ _id }).then(result => {
        res.sendStatus(200);
    });

});

api.put(function (req, res) {
    var todo = req.body.todo;
    const _id = new ObjectId(todo._id);
    delete todo._id;
    app.db.collection('todos').findAndModify({ _id }, [], {
        $set: {
            text: todo.text,
            done: todo.done
        }
    }, { new: true, upsert: true }).then(result => {
        res.json(result.value);
    });
});

var clearTodosDone = function (req, res, next) {
    app.db.collection('todos').deleteMany({ done: true }).then(result => {
        next();
    });
}

api.post('/clear', clearTodosDone, getAllTodos);

app.use('/api', api);

app.listen(3003, function () {
    console.log('Listening to ' + 3003);
});