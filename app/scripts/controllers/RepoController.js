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
//    ('/:repo/:org/:reponame/:commit', { repo: '@repo', org: '@org', repomane: '@reponame', commit: '@commit' });
//    /search/repositories?q=yeoman&sort=stars&order=desc
    
    Repo.get({
        type: 'search',
        org: 'repositories',
        q: 'yeoman',
        sort: 'stars',
        order: 'desc'
    }, function (response) {
        $scope.repos = response.items;
    });
});

RepoApp.controller('ShowRepoController', function ($scope, $routeParams, Repo, $http, $location) {
    $scope.page = 0;
    var per_page = 20;
    $scope.finish = false;
    
    $scope.activate = function (item) {
        $scope.selected = item;
    }
    
    $scope.isActive = function(item) {
        return $scope.selected === item;
    }
    
    var params = '/commits?page=0&per_page=5';
    
    Repo.get({
        type: 'repos',
        org: 'yeoman',
        reponame: $routeParams.repo
    },function (response) {
        $scope.stars = response.stargazers_count;
        $scope.forks = response.forks_count;
        $scope.contribs = response.watchers_count;
    });
    
    Repo.query({
        type: 'repos',
        org: 'yeoman',
        reponame: $routeParams.repo,
        commit: 'commits',
        page: 0,
        per_page: per_page
    },function (response) {
        $scope.commits = response;
    });
    
//    https://api.github.com/repos/yeoman/yeoman/commits?q=stargazers
    
    $scope.next_page = function () {
        $scope.page++;
        Repo.query({
            type: 'repos',
            org: 'yeoman',
            reponame: $routeParams.repo,
            commit: 'commits',
            page: $scope.page,
            per_page: per_page
        },function (response) {
            for ( var i=0; i<per_page; i++ ){
                $scope.commits.push(response[i]);;
            }
        });
    }
});