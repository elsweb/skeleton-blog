var url = 'http://elsweb.servehttp.com:3030';
angular.module('Resource' , ['ngResource'])
.factory('ListAll',function($resource){
	return $resource(url + '/post/consulta');
})
.factory('Read',function($resource){
})
.factory('Create',function($resource){
	return $resource(url + '/post/create' , null , {
		add : {
			method : 'POST'
		}
	});
})
.factory('Delete',function($resource){
	return $resource(url + '/post/remove/:id');
})
.factory('Update',function($resource){

})
.factory('RegisterPost', function(Create, $q, $rootScope){
	var service = {};
	service.add = function(post){
		return $q(function(resolve , reject){
			Create.add(post, function(){
					$rootScope.$broadcast('onFocus');
					resolve({
						msg : 'Postagem Cadastrada Com Sucesso',
						inc : true
					})
				},function(error){
					console.log(error);
					reject({
						msg : 'Não foi Posssível Cadastrar Postagem'
				});
			})
		})
	}
	return service;
})
 /*
    Servidor ainda não suporta o uso de apenas uma unica url para as actions,
    porém o blog já vem com suporte para o uso da mesma no futuro. Altere o nome da variavel
    para para fazer uso tem todo o script quando tiver o suporte. Dica aula 10 do Curso.
*/