'use strict';

/**
 * @ngdoc overview
 * @name elasticsearchChallengeApp
 * @description
 * # elasticsearchChallengeApp
 *
 * Main module of the application.
 */
var RepoApp = angular.module('RepoApp', ['ngResource', 'ngRoute']);

RepoApp.constant('CONF', {
    apiEndpoint: 'http://api.github.com'
});

RepoApp.config(function ($locationProvider, $routeProvider) {
//    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/views/search-repo.html',
            controller: 'IndexRepoController'
        })
        .when('/:repo', {
            templateUrl: '/views/show-repo.html',
            controller: 'ShowRepoController'
        })
        .otherwise({
            redirectTo: '/'
        });
});