var id = 0;
angular.module('mean-app').controller('TodosController', function () {
    var vm = this;
    vm.title = "Todos";
    vm.newTodo = "";
    vm.todosList = [];

    vm.resetTodo = function () {
        vm.newTodo = "";
    }

    vm.clearTodos = function () {
        vm.todosList = [];
    }

    vm.addTodo = function ($event) {
        if ($event && $event.key !== "Enter") return;

        var newTodo = {
            id: id,
            text: vm.newTodo,
            done: false
        }

        id += 1;

        vm.todosList.push(newTodo);
        vm.resetTodo();
    }

    vm.removeTodo = function ($index, todo) {
        vm.todosList.splice($index, 1);
    }

    vm.clearDone = function() {
        vm.todosList = vm.todosList.filter(todo => !todo.done);
    }
});