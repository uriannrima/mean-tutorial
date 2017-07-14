module.exports = function (app) {
    app.controllers = app.controllers || {};

    var saveOrUpdate = function (req, res) {
        var todo = req.body.todo;
        app.repositories.todos.saveOrUpdate(todo).then(savedTodo => {
            res.json(savedTodo);
        });
    }

    app.controllers.todos = {
        get: function (req, res) {
            var todo = req.body.todo;
            app.repositories.todos.getAll().then(result => {
                res.json(result);
            });
        },
        post: saveOrUpdate,
        put: saveOrUpdate,
        delete: function (req, res) {
            app.repositories.todos.deleteOne(todoId).then(result => {
                res.json(result);
            });
        }
    };
}