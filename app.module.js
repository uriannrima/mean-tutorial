// Requisitar app.config
import angular from 'angular';
import ngRoute from 'angular-route';

import routes from './app.routes';
import NavbarComponent from './components/navbar/navbar.component';

import LayoutController from './shared/layout.controller';
import HomeController from './sections/home/home.controller';
import TodosController from './sections/todos/todos.controller';

import TodosService from './services/todos.service';

angular.module('mean-app', [ngRoute])
    .config(routes)
    .component('meanNavbar', NavbarComponent)
    .controller('LayoutController', LayoutController)
    .controller('HomeController', HomeController)
    .controller('TodosController', TodosController)
    .factory('TodosService', TodosService);
