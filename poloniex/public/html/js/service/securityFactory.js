// intercepta todo request / response http para colocar header de sessionId
// ou ler header proveniente do back-end de autenticacao
// ou validar 403
angular.module('Commom.Factory', []).factory('securityInterceptor',
				['$log','$q',
function( $log,  $q) {

		// The return API
		var securityInterceptor = {
			request: function(config) {
				return config || $q.when(config);
			},

			requestError: function(rejection) {
				return $q.reject(rejection);
			},

			response: function(response) {
				return response || $q.when(response);
			},

			responseError: function(rejection) {
				if (rejection.status == 401 && rejection.config.url.indexOf('/api/userlogged/login')>=0) {
					return $q.reject(rejection);
				}
				if (rejection.status == 403 || rejection.status == 401) {
          	return $q.reject(rejection);
          }
        return $q.reject(rejection);
			}
		};

		return securityInterceptor;
	}]);
