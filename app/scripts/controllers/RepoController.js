'use strict';

/**
 * @ngdoc function
 * @name elasticsearchChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elasticsearchChallengeApp
 */
RepoApp.controller('IndexRepoController', function ($scope, Repo) {
    $scope.repos = false;
    Repo.list(function (response) {
        $scope.repos = response.items;  
    });
});

RepoApp.controller('ShowRepoController', function ($scope, $routeParams, Repo, $http, $location) {
    $scope.page = 0;
    
    $scope.activate = function (item) {
        $scope.selected = item;
    }
    
    $scope.isActive = function(item) {
        return $scope.selected === item;
    }
    
    var params = '/commits?page=0&per_page=5';
    
    $http.get('https://api.github.com/repos/yeoman/'+ $routeParams.repo)
        .success(function (data, status, headers, config) {
            $scope.stars = data.stargazers_count;
            $scope.forks = data.forks_count;
            $scope.contribs = data.watchers_count;
        });
    
    $http.get('https://api.github.com/repos/yeoman/'+ $routeParams.repo + params)
        .success(function (data, status, headers, config) {
            $scope.commits = data;
        });
    
    
//    https://api.github.com/repos/yeoman/yeoman/commits?q=stargazers
    
    $scope.next_page = function () {
        $scope.page++;
    }
    
    
    
});