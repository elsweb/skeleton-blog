angular.module('blog').controller('addPost', function($scope, $http, $resource, $routeParams){
	$scope.post = {};
	$scope.msg = '';
	var url = 'http://elsweb.servehttp.com:3030'
	 /*
    Servidor ainda não suporta o uso de apenas uma unica url para as actions,
    porém o blog já vem com suporte para o uso da mesma no futuro. Altere o nome da variavel
    para para fazer uso tem todo o script quando tiver o suporte. Dica aula 10 do Curso.
    */

	var edit = $resource(url + '/post/update/:id', null,{
		update : {
			method : 'PUT'
		}
	});

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
				edit.update({id : $scope.post.post_id}, $scope.post, function(){
					$scope.msg = 'Postagem ' + $scope.post.post_title + ' foi alterado com sucesso';
				},function(error){
					$scope.msg = 'Não foi Possível alterar ' + $scope.post.post_title;
				})
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