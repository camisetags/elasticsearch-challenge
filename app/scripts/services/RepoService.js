

RepoApp.factory('Repo', function ($http, CONF) {
    var url = CONF.apiEndpoint+'/search/repositories?q=yeoman&sort=stars&order=desc';
    
    function list (callback) {
        $http.get(url)
            .success(function (data, status, headers, config) {
               callback(data);
            });
    }
    
    function show (repo, callback) {
        $http.get('https://api.github.com/repos/yeoman/'+repo)
            .success(function (data, status, headers, config) {
                callback(data);
            });
    }
    
    
    
    return { 
        list: list,
        show: show,
        
    };
});

//RepoApp.factory('RepoSearch', function ($resource, CONF) {
//    return $resource(CONF.apiEndpoint+'/');
//});