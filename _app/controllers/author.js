angular.module('blog').controller('AuthorController',function($scope, $http){
	$scope.authors = [];
	var url = 'http://elsweb.servehttp.com:3030';
	$http.get(url + '/author/consulta')
	.success(function(rtn){
		$scope.authors = rtn; 
		console.log(rtn);
	})
	.error(function(erro){
		console.log(erro);
	})
});