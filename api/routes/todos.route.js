const express = require('express');

module.exports = function (app) {

    var api = express.Router();
    var interface = api.route('/todos');
    
    interface.get(app.controllers.todos.get);
    interface.put(app.controllers.todos.put);
    interface.post(app.controllers.todos.post);

    api.delete('/todos/:todoId', app.controllers.todos.delete);

    app.use(api);
}