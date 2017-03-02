angular.module('security.authorization', [])

.provider('secAuth', {

  requireAuthenticatedUser: ['secAuth', function(secAuth) {
    return secAuth.requireAuthenticatedUser();
  }],
  validRole: ['secAuth', function(secAuth) {
    return secAuth.validRole();
  }],
  $get: ['AppService', '$location', function(AppService, $location) {
    var service = {
      requireAuthenticatedUser: function() {
    	  return AppService.secGetUser();
      },
      validRole: function(roleList) {
    	  if (!roleList) {
    		  return false;
    	  }
    	  // transforma parametro enviado sempre num array mesmo que seja um unico string
    	  var roles = [];
    	  if (Array.isArray(roleList)) {
    		  roles = roleList;
    	  } else {
    		  roles.push(roleList);
    	  }
    	  // verifica se possui permissao - senao redireciona
    	  var hasRole = AppService.secHasRole(roles);
    	  if (!hasRole) {
    		  $location.path('/');
    	  }
    	  return hasRole;
      }
    };

    return service;
  }]
});
