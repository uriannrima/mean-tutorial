const ObjectID = require('mongodb').ObjectID;
module.exports = function (app) {
    app.repositories = app.repositories || {};

    app.repositories.todos = {
        getAll: function () {
            return app.db.collection('todos').find({}).toArray().then(records => {
                return records;
            });
        },
        saveOrUpdate: function (todo) {
            return app.db.collection('todos').findAndModify({ _id }, [], { $set: { text: todo.text, done: todo.done } }, { new: true, upsert: true }).then(result => {
                return result.value;
            });
        },
        deleteOne: function (todoId) {
            return app.db.collection('todos').deleteOne({ _id: new ObjectID(todoId) }).then(result => {
                return true;
            });
        },
        deleteMany: function (filter) {
            return app.db.collection('todos').deleteMany(filter).then(result => {
                return true;
            });
        }
    }
}