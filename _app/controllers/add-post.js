angular.module('blog').controller('addPost', function($scope, $http){
	$scope.post = {};
	$scope.msg = '';
	$scope.submeter = function(){
		if($scope.formPost.$valid){
			$http.post('http://elsweb.servehttp.com:3030/post/create' , $scope.post)
			.success(function(){
				$scope.post = {};
				$scope.msg = 'Postagem Cadastrada Com Sucesso';
			})
			.error(function(error){
				$scope.msg = 'Não foi Posssível Cadastrar Postagem';
				console.log(error);
			});
		}
	};
});