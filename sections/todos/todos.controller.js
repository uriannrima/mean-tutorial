angular.module('mean-app').controller('TodosController', function (TodosService) {
    var vm = this;
    vm.title = "Todos";
    vm.newTodo = "";
    vm.todosList = [];

    TodosService.getAll().then(function (response) {
        vm.todosList = response.data;
    });

    vm.resetTodo = function () {
        vm.newTodo = "";
    }

    vm.clearTodos = function () {
        vm.todosList = [];
    }

    vm.addTodo = function ($event) {
        if ($event && $event.key !== "Enter") return;

        var newTodo = {
            text: vm.newTodo,
            done: false,
            edit: false
        };

        TodosService.saveOrUpdate(newTodo).then(function (response) {
            var todo = response.data;
            vm.todosList.push(todo);
            vm.resetTodo();
        }, function (error) {
            console.log("Error.");
        });
    }

    vm.removeTodo = function ($index, todo) {
        TodosService.delete(todo._id).then(function () {
            vm.todosList.splice($index, 1);
        });
    }

    vm.clearDone = function () {
        TodosService.clearDone().then(function (response) {
            vm.todosList = response.data;
        });
    }

    vm.save = function ($index, todo) {
        TodosService.saveOrUpdate(todo).then(function (response) {
            todo.edit = false;
        });
    }
});