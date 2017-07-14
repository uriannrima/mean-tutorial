const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {
    MongoClient.connect('mongodb://localhost:27017/mean-app').then(database => {
        app.db = database;
    });
}