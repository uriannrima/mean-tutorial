angular.module('mean-app').factory('TodosService', function ($http) {
    const apiUrl = "http://localhost:3003/api/todos";
    return {
        getAll: function () {
            return $http.get(apiUrl);
        },
        saveOrUpdate: function (todo) {
            if (todo._id) {
                return $http.put(apiUrl, { todo: todo });
            } else {
                return $http.post(apiUrl, { todo: todo });
            }
        },
        delete: function (todoId) {
            return $http.delete(apiUrl + '/' + todoId);
        },
        clearDone: function () {
            return $http.post(apiUrl + "/clear");
        }
    }
});