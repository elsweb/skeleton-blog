angular.module('blog').controller('PostController', function($scope, $http){
	$scope.posts = [];
	$scope.bfilter = '';
	var url = 'http://elsweb.servehttp.com:3030/post/consulta';
    $http.get(url)
    .success(function(posts){
    	$scope.posts = posts;
    })
    .error(function(erro){
    	console.log(error);
    });
});