angular.module('blog').controller('PostController', function($scope, ListAll, Delete){
	$scope.posts = [];
	$scope.bfilter = '';
    $scope.msg = '';
    
   /*Listar Postagens*/
    ListAll.query(function(rtn){
        $scope.posts = rtn;
    },function(error){
        console.log(error);
    })
  
    /*Remover Postagem*/
    /*Servidor ainda não da suporte ao DELETE, porém manter estrutura para fins Futuros*/
    $scope.remove = function(post){
        Delete.delete({id : post.post_id }, function(){
            var indicePost = $scope.posts.indexOf(post);
            $scope.posts.splice(indicePost, 1);
            $scope.msg = 'Postagem ' + post.post_title + ' removido com sucesso';
        } , function(error){
            $scope.msg = 'Não foi Possivel remover a postagem '+ post.post_title;
        })
    }
});