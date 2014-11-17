'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngResource = require('angular-resource');
var ngAnimate = require('angular-animate');
var $ = angular.element;

var app = module.exports = angular.module('project', ['ui.router', 'ngResource', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    /* How to require states */
    require('./states/index')($stateProvider);
    require('./states/membership')($stateProvider);
    require('./states/team')($stateProvider);
}]);

// Access the $rootScope
app.run(['$rootScope', '$http', '$location', function($rootScope, $http, $location) {
    $rootScope.state = true;

    // On state changes
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.containerClass = toState.data.containerClass; //Set page class
        $rootScope.documentTitle = toState.data.title; //Set page title
    });
}]); 