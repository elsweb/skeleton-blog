angular.module('blog').controller('addPost', function($scope, $http, $routeParams){
	$scope.post = {};
	$scope.msg = '';
	var url = 'http://elsweb.servehttp.com:3030'

	/*Servidor ainda não da suporte ao RECOVER, porém manter estrutura para fins Futuros*/
	if($routeParams.id){
		$http.get(url + '/post/consulta/' + $routeParams.id)
		.success(function(rtn){
			$scope.post = rtn;
		})
		.error(function(erro){
			console.log(erro);
			$scope.msg = 'Não foi possível Recuperar a Postagem, Contacte o Administrador';
		})
	}

	$scope.submeter = function(){
		/*Servidor ainda não da suporte ao UPDATE, porém manter estrutura para fins Futuros*/
		if($scope.formPost.$valid){
			if($scope.post.post_id){
				$http.put(url + '/post/update' + $scope.post.post_id, $scope.post)
				.success(function(){
					$scope.msg = 'Postagem ' + $scope.post.post_title + ' foi alterado com sucesso';
				})
				.error(function(){
					$scope.msg = 'Não foi Possível alterar ' + $scope.post.post_title;
				});
			}else{
				$http.post(url + '/post/create' , $scope.post)
				.success(function(){
					$scope.post = {};
					$scope.msg = 'Postagem Cadastrada Com Sucesso';
				})
				.error(function(error){
					$scope.msg = 'Não foi Posssível Cadastrar Postagem';
					console.log(error);
				});
			}
		}
	};
});