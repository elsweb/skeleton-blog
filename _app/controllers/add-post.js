angular.module('blog').controller('addPost', function($scope, $http, Create, $resource, $routeParams){
	$scope.post = {};
	$scope.msg = '';
	var url = 'http://elsweb.servehttp.com:3030'
	
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
				Create.add($scope.post, function(){
					$scope.post = {};
					$scope.msg = 'Postagem Cadastrada Com Sucesso';
				},function(){
					$scope.msg = 'Não foi Posssível Cadastrar Postagem';
					console.log(error);
				});
			}
		}
	};
});